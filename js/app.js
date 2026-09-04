(() => {
  const heroEl = document.querySelector("#hero");
  const featuredEl = document.querySelector("#featured");
  const sliderEl = document.querySelector("#slider");
  const detail = document.querySelector("#detail");
  const moreDetail = document.querySelector("#more-detail");
  const videosEl = document.querySelector("#videos");
  const cvBtn = document.querySelector("[data-cv]");
  const liBtn = document.querySelector("[data-linkedin]");
  const funyunEls = [...document.querySelectorAll(".funyun")];

  const HERO_ID = "unseen";
  const FEATURED_IDS = ["calliope", "smoltheft", "proxchat"];
  const HOME_IDS = [HERO_ID, ...FEATURED_IDS];

  if (SITE.email) {
    document.querySelectorAll("[data-mail]").forEach((btn) => {
      btn.href = `mailto:${SITE.email}`;
      btn.hidden = false;
      btn.textContent = SITE.email;
      btn.closest("[data-mail-row]")?.removeAttribute("hidden");
    });
  }
  if (SITE.linkedin && liBtn) {
    liBtn.href = SITE.linkedin;
    liBtn.hidden = false;
    liBtn.closest("[data-linkedin-row]")?.removeAttribute("hidden");
  }

  if (cvBtn) {
    fetch(SITE.cv, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          cvBtn.hidden = false;
          cvBtn.closest("[data-cv-row]")?.removeAttribute("hidden");
        }
      })
      .catch(() => {});
  }

  function probeLocalShots(project) {
    const listed = (project.shots || []).filter(Boolean);
    const checks = [];
    for (let i = 1; i <= 8; i += 1) {
      const n = String(i).padStart(2, "0");
      ["jpg", "jpeg", "png", "gif", "webp"].forEach((ext) => {
        checks.push(`media/${project.id}/${n}.${ext}`);
      });
    }
    return Promise.all(
      checks.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((found) => [...new Set([...listed, ...found.filter(Boolean)])]);
  }

  function openLightbox(src, title) {
    let box = document.querySelector("#lightbox");
    if (!box) {
      box = document.createElement("div");
      box.id = "lightbox";
      box.className = "lightbox";
      document.body.appendChild(box);
    }
    box.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Close image">×</button>
      <img src="${src}" alt="${title}" />
    `;
    box.hidden = false;
    box.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    box.addEventListener("click", (event) => {
      if (event.target === box) closeLightbox();
    });
  }

  function closeLightbox() {
    const box = document.querySelector("#lightbox");
    if (box) box.hidden = true;
  }

  function youtubeIframe(id, title, autoplay) {
    const watch = `https://www.youtube.com/watch?v=${id}`;
    if (typeof location !== "undefined" && location.protocol === "file:") {
      return `<p class="lede">Open the site at http://127.0.0.1:4173/ to embed videos, or <a href="${watch}" target="_blank" rel="noopener">watch on YouTube</a>.</p>`;
    }
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      playsinline: "1",
    });
    if (autoplay) params.set("autoplay", "1");
    try {
      if (location.origin && location.origin !== "null") {
        params.set("origin", location.origin);
      }
    } catch (err) {}
    return `<iframe
      src="https://www.youtube.com/embed/${id}?${params.toString()}"
      title="${title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="origin"
      allowfullscreen></iframe>`;
  }

  function projectVideos(project) {
    if (project.videos?.length) return project.videos;
    if (project.youtube) {
      return [{ youtube: project.youtube, label: project.videoLabel || `${project.title} video` }];
    }
    return [];
  }

  function playButton(project, ghost = true) {
    if (!project.play) return "";
    return `<a class="${ghost ? "btn btn-ghost" : "btn"}" href="${project.play}" target="_blank" rel="noreferrer">Play in browser</a>`;
  }

  function featuredClip(project) {
    return projectVideos(project).find((c) => /playthrough|showcase/i.test(c.label));
  }

  function playthroughButton(project, ghost = true) {
    const clips = projectVideos(project);
    const featured = featuredClip(project);
    const clip = featured || clips[0];
    if (!clip) return "";
    const label = /playthrough/i.test(clip.label) ? "Watch playthrough" : clip.label;
    return `<a class="${ghost ? "btn btn-ghost" : "btn"}" href="https://www.youtube.com/watch?v=${clip.youtube}" target="_blank" rel="noreferrer">${label}</a>`;
  }

  function extraLinkButtons(project, ghost) {
    return (project.extraLinks || [])
      .map((link) => {
        const external = /^https?:/i.test(link.href);
        const extra = external ? ` target="_blank" rel="noopener"` : "";
        return `<a class="${ghost ? "btn btn-ghost" : "btn"}" href="${link.href}"${extra}>${link.label}</a>`;
      })
      .join("");
  }

  function hasWriteup(project) {
    return Boolean(project?.sections?.length);
  }

  function readMoreButton(project) {
    if (!hasWriteup(project)) return "";
    return `<a class="btn" href="project.html?id=${project.id}">Read more</a>`;
  }

  function relatedLinks(project) {
    if (!project.related?.length) return "";
    return `<p class="related">${project.related
      .map((rel) => {
        const target = PROJECTS.find((p) => p.id === rel.id);
        if (target && hasWriteup(target)) {
          return `<a href="project.html?id=${rel.id}">${rel.label}</a>`;
        }
        return `<span>${rel.label}</span>`;
      })
      .join(" · ")}</p>`;
  }

  function renderBrief(project) {
    const text = project.brief || project.overview;
    if (!text) return "";
    const paras = Array.isArray(text) ? text : [text];
    return paras.map((p) => `<p class="lede">${p}</p>`).join("");
  }

  function renderTable(table) {
    if (!table) return "";
    const head = table.headers.map((h) => `<th>${h}</th>`).join("");
    const body = table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="proj-table-wrap"><table class="proj-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function inlineMarkdown(text) {
    let out = escapeHtml(text);
    out = out.replace(/`([^`]+)`/g, "<code>$1</code>");
    out = out.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>'
    );
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return out;
  }

  function markdownToHtml(md) {
    const lines = String(md).replace(/\r\n/g, "\n").split("\n");
    const html = [];
    let i = 0;

    function flushList(kind, items) {
      if (!items.length) return;
      const tag = kind === "ol" ? "ol" : "ul";
      html.push(
        `<${tag}>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</${tag}>`
      );
      items.length = 0;
    }

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) {
        i += 1;
        continue;
      }

      const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
      if (heading) {
        const level = heading[1].length;
        const tag = Math.min(level + 3, 6);
        html.push(`<h${tag} class="proj-doc-h">${inlineMarkdown(heading[2])}</h${tag}>`);
        i += 1;
        continue;
      }

      if (trimmed.startsWith("|") && /^\|?\s*:?-{3,}/.test((lines[i + 1] || "").trim())) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const cells = lines[i]
            .trim()
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split("|")
            .map((cell) => cell.trim());
          if (!/^:?-{3,}$/.test(cells.join("").replace(/\|/g, ""))) {
            const isDivider = cells.every((cell) => /^:?-{3,}:?$/.test(cell));
            if (!isDivider) rows.push(cells);
          }
          i += 1;
        }
        if (rows.length) {
          const headers = rows.shift();
          html.push(
            `<div class="proj-table-wrap"><table class="proj-table"><thead><tr>${headers
              .map((cell) => `<th>${inlineMarkdown(cell)}</th>`)
              .join("")}</tr></thead><tbody>${rows
              .map(
                (row) =>
                  `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`
              )
              .join("")}</tbody></table></div>`
          );
        }
        continue;
      }

      if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
        const ordered = /^\d+\.\s+/.test(trimmed);
        const items = [];
        while (i < lines.length) {
          const next = lines[i].trim();
          if (ordered && /^\d+\.\s+/.test(next)) items.push(next.replace(/^\d+\.\s+/, ""));
          else if (!ordered && /^[-*]\s+/.test(next)) items.push(next.replace(/^[-*]\s+/, ""));
          else break;
          i += 1;
        }
        flushList(ordered ? "ol" : "ul", items);
        continue;
      }

      const para = [trimmed];
      i += 1;
      while (i < lines.length) {
        const next = lines[i].trim();
        if (
          !next ||
          next.startsWith("|") ||
          /^#{1,4}\s/.test(next) ||
          /^[-*]\s+/.test(next) ||
          /^\d+\.\s+/.test(next)
        ) {
          break;
        }
        para.push(next);
        i += 1;
      }
      html.push(`<p>${inlineMarkdown(para.join(" "))}</p>`);
    }

    return html.join("");
  }

  function renderDoc(block) {
    if (!block.doc) return "";
    return `<details class="proj-doc">
      <summary>Documentation</summary>
      <div class="proj-doc-body">${markdownToHtml(block.doc)}</div>
    </details>`;
  }

  function videoFigure(clip) {
    if (!clip?.youtube) return "";
    return `
      <figure class="project-video">
        <div class="video">
          ${youtubeIframe(clip.youtube, clip.label)}
        </div>
        <figcaption>${clip.label} · <a href="https://www.youtube.com/watch?v=${clip.youtube}" target="_blank" rel="noopener">YouTube</a></figcaption>
      </figure>`;
  }

  function clipFigure(block) {
    if (!block?.clip) return "";
    return `
      <figure class="project-video">
        <div class="video clip">
          <video src="${block.clip}" autoplay muted loop playsinline></video>
        </div>
      </figure>`;
  }

  function stillItems(block) {
    if (block?.images?.length) return block.images;
    if (block?.image) return [{ src: block.image, alt: block.imageAlt || "" }];
    return [];
  }

  function imageFigure(block) {
    const items = stillItems(block);
    if (!items.length) return "";
    const figures = items
      .map(
        (item) => `
      <figure class="project-still${item.size ? ` project-still-${item.size}` : ""}">
        <button class="shot" type="button" data-src="${item.src}">
          <img src="${item.src}" alt="${item.alt || ""}" />
        </button>
      </figure>`
      )
      .join("");
    if (items.length === 1) return figures;
    return `<div class="project-stills">${figures}</div>`;
  }

  function renderCopy(block, withDoc = true) {
    const paras = (block.paragraphs || []).map((p) => `<p>${p}</p>`).join("");
    const bullets = block.bullets?.length
      ? `<ul>${block.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
    return `${paras}${bullets}${renderTable(block.table)}${withDoc ? renderDoc(block) : ""}`;
  }

  function renderSubsection(sub, className) {
    const media = sub.youtube
      ? videoFigure({
          youtube: sub.youtube,
          label: sub.videoLabel || "Video",
        })
      : clipFigure(sub);
    const copy = `<div class="proj-sub-copy">
      <h4>${sub.title}</h4>
      ${renderCopy(sub, !media)}
    </div>`;
    if (media) {
      return `<article class="${className}">
        <div class="proj-split">${copy}${media}</div>
        ${renderDoc(sub)}
      </article>`;
    }
    return `<article class="${className}">${copy}</article>`;
  }

  function renderMore(section) {
    return (section.more || [])
      .map((block) => `<h3>${block.title}</h3>${renderCopy(block)}`)
      .join("");
  }

  function renderSections(sections) {
    return (sections || [])
      .map((section) => {
        const cardClass = section.layout === "cards" ? "proj-card" : "proj-contrib";
        const subs = (section.subsections || [])
          .map((sub) => renderSubsection(sub, cardClass))
          .join("");
        const subWrap = subs
          ? section.layout === "cards"
            ? `<div class="proj-family">${subs}</div>`
            : `<div class="proj-contribs">${subs}</div>`
          : "";
        const copy = `${renderCopy(section)}${renderMore(section)}`;
        const photos = stillItems(section);
        const still = imageFigure(section);
        const splitClass = photos.length > 1 ? "proj-split proj-split-photos" : "proj-split";
        const body = still
          ? `<div class="${splitClass}">
              <div class="proj-sub-copy">
                <h3>${section.title}</h3>
                ${copy}
              </div>
              ${still}
            </div>`
          : `<h3>${section.title}</h3>
             <div class="proj-prose">${copy}</div>`;
        return `<section class="proj-section">
          ${body}
          ${subWrap}
        </section>`;
      })
      .join("");
  }

  function bindShots(root, title) {
    root?.querySelectorAll(".shot").forEach((el) => {
      el.addEventListener("click", () => openLightbox(el.dataset.src, title));
    });
  }

  const projectPage = document.querySelector("#project-page");
  if (projectPage) {
    const id = new URLSearchParams(location.search).get("id");
    const project = PROJECTS.find((p) => p.id === id);

    if (!project || !hasWriteup(project)) {
      projectPage.innerHTML = `
        <section class="page-head">
          <p class="kicker">Work</p>
          <h2>Project not found</h2>
          <p><a href="index.html">Back to work</a></p>
        </section>`;
    } else {
      document.title = `${project.title} — Euan Scott`;

      function paint(shots) {
        const clips = projectVideos(project);
        const playthrough = featuredClip(project);
        const topClips = clips.filter((c) => !c.inline && c !== playthrough);
        const intro = `
            <p class="role hero-role">
              ${project.role}
              ${project.duration ? `<span class="duration">${project.duration}</span>` : ""}
            </p>
            <p class="proj-meta">${project.engine} · ${project.lang} · ${project.team} · ${project.year}</p>
            ${renderBrief(project)}
            ${relatedLinks(project)}
            <div class="btn-row">
              ${playButton(project, false)}
              ${playthroughButton(project)}
              ${extraLinkButtons(project)}
            </div>`;
        const shotsHTML = shots
          .map(
            (src, i) => `
            <button class="shot" type="button" data-src="${src}">
              <img src="${src}" alt="${project.title} capture ${i + 1}" />
            </button>`
          )
          .join("");

        let media = "";
        let introHTML = `<div class="project-body">${intro}`;
        if (playthrough) {
          media = `
            <div class="project-hero-row">
              <div class="project-body project-body-inline">${intro}</div>
              ${videoFigure(playthrough)}
            </div>`;
          if (topClips.length) {
            media += `<div class="project-videos">${topClips.map(videoFigure).join("")}</div>`;
          }
          introHTML = `<div class="project-body">`;
        } else if (topClips.length) {
          media = `<div class="project-videos">${topClips.map(videoFigure).join("")}</div>`;
        } else if (!shotsHTML) {
          media = `<div class="project-cover"><img src="${project.cover}" alt="" /></div>`;
        }
        if (shotsHTML) {
          media += `<div class="media-row project-media">${shotsHTML}</div>`;
        }

        projectPage.innerHTML = `
          <section class="page-head">
            <p class="kicker"><a href="index.html">Work</a> / ${project.engine}</p>
            <h2>${project.title}</h2>
            <p>${project.subtitle}</p>
          </section>
          ${media}
          ${introHTML}
            ${renderSections(project.sections)}
          </div>
        `;
        bindShots(projectPage, project.title);
      }

      paint(project.shots.filter(Boolean));
      probeLocalShots(project).then((shots) => {
        if (document.querySelector("#project-page")) paint(shots);
      });
    }
  }

  function shippedBlock(project) {
    if (!project.shipped?.length) return "";
    return `<h3 class="contrib-title">My contributions</h3>
      <ul class="shipped">${shippedItems(project)}</ul>`;
  }

  function shippedItems(project) {
    return project.shipped
      .map((item) => {
        const split = item.indexOf(": ");
        if (split === -1) return `<li>${item}</li>`;
        const title = item.slice(0, split);
        const body = item.slice(split + 2);
        return `<li><strong>${title}:</strong> ${body}</li>`;
      })
      .join("");
  }

  function roleLine(project) {
    return `<p class="role hero-role">
      ${project.role}
      ${project.duration ? `<span class="duration">${project.duration}</span>` : ""}
    </p>`;
  }

  function projectMedia(project) {
    if (project.highlight) {
      return `<div class="hero-media">
        <video src="${project.highlight}" autoplay muted loop playsinline></video>
      </div>`;
    }
    const clip = projectVideos(project)[0];
    return `<div class="hero-media">
      <img src="${project.cover}" alt="${project.title}" />
      ${clip ? `<span class="play">Play</span>` : ""}
    </div>`;
  }

  function projectCopy(project) {
    return `<div class="hero-copy">
      <h2>${project.title}</h2>
      ${roleLine(project)}
      <p class="lede">${project.overview}</p>
      ${shippedBlock(project)}
      <div class="tags">
        ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
      ${relatedLinks(project)}
      <div class="btn-row">
        ${readMoreButton(project)}
        ${playthroughButton(project)}
      </div>
    </div>`;
  }

  if (heroEl && featuredEl && sliderEl && detail) {
    const heroProject = PROJECTS.find((p) => p.id === HERO_ID);
    const featured = FEATURED_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean);
    const rest = PROJECTS.filter((p) => !HOME_IDS.includes(p.id));

    if (heroProject) {
      heroEl.innerHTML = `${projectMedia(heroProject)}${projectCopy(heroProject)}`;
    }

    featuredEl.innerHTML = featured
      .map(
        (project) => `
        <button class="feature" type="button" data-id="${project.id}">
          <img src="${project.cover}" alt="${project.title}" />
          <div class="feature-copy">
            <div>
              <h2>${project.title}</h2>
              <p>${project.engine} · ${project.year}</p>
            </div>
            <span class="see-more">See more</span>
          </div>
        </button>`
      )
      .join("");

    sliderEl.innerHTML = rest
      .map(
        (project) => `
        <button class="slide" type="button" data-id="${project.id}">
          <img src="${project.cover}" alt="${project.title}" />
          <div class="slide-copy">
            <div>
              <h3>${project.title}</h3>
              <p>${project.engine} · ${project.year}</p>
            </div>
            <span class="see-more">See more</span>
          </div>
        </button>`
      )
      .join("");

    function mediaEmbed(project) {
      if (project.highlight) {
        return `<div class="video highlight">
          <video src="${project.highlight}" autoplay muted loop playsinline></video>
        </div>`;
      }
      const clip = projectVideos(project)[0];
      if (!clip) return "";
      return `<div class="video">
        ${youtubeIframe(clip.youtube, `${project.title} video`)}
      </div>`;
    }

    function renderDetail(project, shots, root) {
      const target = root || detail;
      const video = mediaEmbed(project);
      const shotsHTML = shots
        .map(
          (src, i) => `
          <button class="shot" type="button" data-src="${src}">
            <img src="${src}" alt="${project.title} capture ${i + 1}" />
          </button>`
        )
        .join("");

      target.innerHTML = `
        <div class="detail-inner">
          <div class="media-row">
            ${video}
            ${shotsHTML}
          </div>
          <div class="detail-copy">
            <h3>${project.title}</h3>
            ${roleLine(project)}
            <p class="lede">${project.overview}</p>
            ${shippedBlock(project)}
            <div class="tags">
              ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
            ${relatedLinks(project)}
            <div class="btn-row">
              ${readMoreButton(project)}
              ${playButton(project)}
              ${playthroughButton(project)}
              ${extraLinkButtons(project, true)}
            </div>
          </div>
        </div>
      `;

      target.querySelectorAll(".shot").forEach((el) => {
        el.addEventListener("click", () => openLightbox(el.dataset.src, project.title));
      });
    }

    function setHeroCollapsed(collapsed) {
      if (!heroProject) return;
      heroEl.classList.toggle("is-collapsed", collapsed);
      const media = heroEl.querySelector(".hero-media");
      if (!media) return;
      const video = media.querySelector("video");
      if (collapsed) {
        video?.pause();
        media.innerHTML = `<img src="${heroProject.cover}" alt="${heroProject.title}" />`;
      } else if (heroProject.highlight) {
        media.innerHTML = `<video src="${heroProject.highlight}" autoplay muted loop playsinline></video>`;
      }
    }

    function setFeaturedActive(id) {
      featuredEl.querySelectorAll(".feature").forEach((el) => {
        el.classList.toggle("is-active", el.dataset.id === id);
      });
    }

    function clearPanel(root) {
      if (!root) return;
      root.querySelectorAll("video").forEach((el) => {
        el.pause();
        el.removeAttribute("src");
        el.load();
      });
      const iframe = root.querySelector("iframe");
      if (iframe) iframe.src = "";
      root.innerHTML = "";
    }

    function closeMorePanels() {
      sliderEl.querySelectorAll(".slide").forEach((el) => {
        el.classList.remove("is-active");
      });
      if (moreDetail) {
        clearPanel(moreDetail);
        moreDetail.hidden = true;
      }
    }

    function centerEl(el) {
      if (!el) return;
      requestAnimationFrame(() => {
        const headerH = document.querySelector(".topbar")?.offsetHeight || 0;
        const rect = el.getBoundingClientRect();
        const available = window.innerHeight - headerH;
        const extra = Math.max(0, (available - rect.height) / 2);
        const y = window.scrollY + rect.top - headerH - extra;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      });
    }

    async function openProject(id, opts = {}) {
      const project = PROJECTS.find((p) => p.id === id);
      if (!project) return;
      closeMorePanels();
      setFeaturedActive(id);
      setHeroCollapsed(true);
      detail.hidden = false;
      renderDetail(project, project.shots.filter(Boolean), detail);
      if (opts.scroll !== false) centerEl(detail);
      const shots = await probeLocalShots(project);
      if (detail.hidden) return;
      const stillThis = featuredEl.querySelector(".feature.is-active")?.dataset.id === id;
      const sameShots = JSON.stringify(shots) === JSON.stringify(project.shots.filter(Boolean));
      if (stillThis && !sameShots) renderDetail(project, shots, detail);
    }

    function closeProject() {
      clearPanel(detail);
      detail.hidden = true;
      setFeaturedActive(null);
      setHeroCollapsed(false);
      closeLightbox();
    }

    async function openMore(id) {
      const project = PROJECTS.find((p) => p.id === id);
      if (!project || !moreDetail) return;
      closeProject();
      closeMorePanels();
      const btn = sliderEl.querySelector(`.slide[data-id="${id}"]`);
      btn?.classList.add("is-active");
      moreDetail.hidden = false;
      renderDetail(project, project.shots.filter(Boolean), moreDetail);
      centerEl(moreDetail);
      const shots = await probeLocalShots(project);
      if (moreDetail.hidden) return;
      const stillThis = sliderEl.querySelector(".slide.is-active")?.dataset.id === id;
      const sameShots = JSON.stringify(shots) === JSON.stringify(project.shots.filter(Boolean));
      if (stillThis && !sameShots) renderDetail(project, shots, moreDetail);
    }

    function closeMore(id) {
      closeMorePanels();
      closeLightbox();
    }

    featuredEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".feature");
      if (!btn) return;
      if (btn.classList.contains("is-active")) closeProject();
      else openProject(btn.dataset.id);
    });

    heroEl.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (heroEl.classList.contains("is-collapsed")) {
        closeProject();
        return;
      }
      if (heroProject.highlight) return;
      const media = e.target.closest(".hero-media");
      const heroClip = projectVideos(heroProject)[0];
      if (!media || !heroClip) return;
      if (media.querySelector("iframe")) {
        media.innerHTML = `
          <img src="${heroProject.cover}" alt="${heroProject.title}" />
          <span class="play">Play</span>`;
        return;
      }
      media.innerHTML = youtubeIframe(heroClip.youtube, heroClip.label, true);
    });

    sliderEl.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest(".shot")) return;
      const btn = e.target.closest(".slide");
      if (!btn) return;
      const id = btn.dataset.id;
      if (btn.classList.contains("is-active")) closeMore(id);
      else openMore(id);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const box = document.querySelector("#lightbox");
        if (box && !box.hidden) closeLightbox();
        else if (!detail.hidden) closeProject();
        else if (moreDetail && !moreDetail.hidden) closeMore();
      }
    });

    openProject("calliope", { scroll: false });
  }

  if (videosEl) {
    videosEl.innerHTML = VIDEOS.map(
      (video) => `
        <article class="video-card" data-yt="${video.youtube}">
          <button class="thumb" type="button" aria-label="Play ${video.title}">
            <img src="https://i.ytimg.com/vi/${video.youtube}/hqdefault.jpg" alt="" />
            <span class="play">Play</span>
          </button>
          <h3>${video.title}</h3>
          <p>${video.blurb}</p>
        </article>`
    ).join("");

    videosEl.addEventListener("click", (e) => {
      const card = e.target.closest(".video-card");
      if (!card || card.querySelector("iframe")) return;
      const id = card.dataset.yt;
      const thumb = card.querySelector(".thumb");
      const frame = document.createElement("div");
      frame.className = "video-frame";
      frame.innerHTML = youtubeIframe(id, "YouTube video", true);
      thumb.replaceWith(frame);
    });
  }

  if (funyunEls.length) {
    const STYLES = [
      { font: '"Fraunces", Georgia, serif', color: "#efe8dc" },
      { font: '"Press Start 2P", monospace', color: "#d6ff4b" },
      { font: '"Pacifico", cursive', color: "#ff5a36" },
      { font: '"Bungee", sans-serif', color: "#6ecbff" },
      { font: '"Playfair Display", serif', color: "#e8c37a" },
      { font: '"Bebas Neue", sans-serif', color: "#d85a2a" },
      { font: '"Rubik Mono One", sans-serif', color: "#c9b7ff" },
      { font: '"Space Grotesk", sans-serif', color: "#7dffb3" },
      { font: '"IBM Plex Mono", monospace', color: "#ff3b5c" },
    ];

    const applyStyle = (el, style) => {
      el.style.fontFamily = style.font;
      el.style.color = style.color;
    };

    const states = [...funyunEls[0].querySelectorAll(".funyun-slot")].map(
      (primarySlot, i) => {
        const ch = primarySlot.dataset.char;
        const style = STYLES[Math.floor(Math.random() * STYLES.length)];
        const slots = funyunEls
          .map((el) => el.querySelectorAll(".funyun-slot")[i])
          .filter(Boolean);
        slots.forEach((slot) => {
          slot.innerHTML = `
            <span class="funyun-stack">
              <span class="funyun-glyph current">${ch}</span>
              <span class="funyun-glyph incoming">${ch}</span>
            </span>`;
          applyStyle(slot.querySelector(".current"), style);
          applyStyle(slot.querySelector(".incoming"), style);
        });
        return { slots, style, busy: false };
      }
    );

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      const shuffle = (list) => {
        const copy = [...list];
        for (let i = copy.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      };

      const nextQueue = (prevLast) => {
        const order = shuffle(states);
        if (prevLast && order.length > 1 && order[0] === prevLast) {
          const swapWith = 1 + Math.floor(Math.random() * (order.length - 1));
          [order[0], order[swapWith]] = [order[swapWith], order[0]];
        }
        return order;
      };

      let queue = nextQueue(null);
      let qi = 0;

      setInterval(() => {
        if (qi >= queue.length) {
          queue = nextQueue(queue[queue.length - 1]);
          qi = 0;
        }
        const pick = queue[qi];
        if (pick.busy) return;
        qi += 1;

        let next = STYLES[Math.floor(Math.random() * STYLES.length)];
        let guard = 0;
        while (next.font === pick.style.font && guard < 8) {
          next = STYLES[Math.floor(Math.random() * STYLES.length)];
          guard += 1;
        }
        const stacks = pick.slots.map((slot) =>
          slot.querySelector(".funyun-stack")
        );
        pick.slots.forEach((slot) => {
          applyStyle(slot.querySelector(".incoming"), next);
        });
        pick.busy = true;
        requestAnimationFrame(() => {
          stacks.forEach((stack) => stack.classList.add("is-swap"));
        });
        const lead = stacks[0];
        const finish = (e) => {
          if (e.propertyName !== "transform") return;
          lead.removeEventListener("transitionend", finish);
          pick.slots.forEach((slot) => {
            const stack = slot.querySelector(".funyun-stack");
            applyStyle(slot.querySelector(".current"), next);
            stack.style.transition = "none";
            stack.classList.remove("is-swap");
            void stack.offsetWidth;
            stack.style.transition = "";
          });
          pick.style = next;
          pick.busy = false;
        };
        lead.addEventListener("transitionend", finish);
      }, 1000);
    }
  }
})();
