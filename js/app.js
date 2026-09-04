(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $all = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function storage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }

  const LEVELS = ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6"];

  /* ---------- global state ---------- */
  const state = {
    progress: storage("px-progress", {}),      // { lessonId: { total, bestPct } }
    vocabLearned: storage("px-vocab-learned", {}), // { "hsk1|你": true }
    stats: storage("px-stats", { correct: 0, attempted: 0 }),
    voice: null,
    session: null // active practice session
  };

  function saveProgress() { storageSet("px-progress", state.progress); }
  function saveVocabLearned() { storageSet("px-vocab-learned", state.vocabLearned); }
  function saveStats() { storageSet("px-stats", state.stats); }

  /* ---------- speech ---------- */
  function pickVoice() {
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    const zh = voices.filter(v => /zh|chinese/i.test(v.lang) || /chinese/i.test(v.name));
    state.voice = zh.find(v => /zh-CN|cmn-Hans-CN/i.test(v.lang)) || zh[0] || null;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    if (state.voice) utter.voice = state.voice;
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    $("#themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
    storageSet("px-theme", theme);
  }
  function loadTheme() {
    applyTheme(storage("px-theme", "dark"));
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(cur === "dark" ? "light" : "dark");
  }

  function updateAccuracyRing() {
    const pct = state.stats.attempted ? Math.round((state.stats.correct / state.stats.attempted) * 100) : 0;
    $("#accuracyRing").style.setProperty("--pct", pct);
    $("#statAccuracy").textContent = state.stats.attempted ? pct + "%" : "--%";
  }

  /* ---------- routing ---------- */
  function navigate(hash) { location.hash = hash; }

  function getRoute() {
    const raw = location.hash.replace(/^#\/?/, "");
    const parts = raw ? raw.split("/") : ["home"];
    return { name: parts[0] || "home", params: parts.slice(1) };
  }

  function setBreadcrumb(text) { $("#breadcrumb").textContent = text; }

  function renderSidebar() {
    const route = getRoute();
    const items = [];
    items.push(navItem("home", "🏠 Trang chủ", route.name === "home"));
    items.push('<div class="nav-group-label">Khóa học HSK</div>');
    LEVELS.forEach(id => {
      const c = COURSES[id];
      const active = route.name === "course" && route.params[0] === id;
      const dot = `<span class="nav-dot" style="background:${c.color}"></span>`;
      const badge = c.comingSoon ? '<span class="nav-badge">Sắp ra mắt</span>' : "";
      items.push(`<button class="nav-item${active ? " active" : ""}" data-nav="course/${id}">
        <span style="display:flex;align-items:center;gap:8px;">${dot}${c.title}</span>${badge}
      </button>`);
    });
    items.push('<div class="nav-group-label">Ôn tập chuyên đề</div>');
    items.push(navItem("vocab/hsk1", "🔤 Từ vựng", route.name === "vocab"));
    items.push(navItem("grammar/hsk1", "📘 Ngữ pháp", route.name === "grammar"));
    $("#sidebarNav").innerHTML = items.join("");
  }

  function navItem(hash, label, active) {
    return `<button class="nav-item${active ? " active" : ""}" data-nav="${hash}">${label}</button>`;
  }

  /* ---------- HOME VIEW ---------- */
  function renderHome() {
    setBreadcrumb("Trang chủ");
    const cards = LEVELS.map(id => {
      const c = COURSES[id];
      const lessonCount = c.lessons.length;
      const totalSentences = c.lessons.reduce((s, l) => s + l.sentences.length, 0);
      const doneLessons = c.lessons.filter(l => (state.progress[l.id] || {}).bestPct >= 100).length;
      const pct = lessonCount ? Math.round((doneLessons / lessonCount) * 100) : 0;
      return `<div class="course-card" style="--course-color:${c.color}" data-nav="course/${id}">
        ${c.comingSoon ? '<span class="badge-soon">Sắp ra mắt</span>' : ""}
        <h3>${c.title}</h3>
        <p>${c.subtitle}</p>
        <div class="meta"><span>${lessonCount} bài học</span><span>${totalSentences} câu</span></div>
        <div class="mini-progress" style="--course-color:${c.color}"><div style="width:${pct}%"></div></div>
      </div>`;
    }).join("");

    $("#view").innerHTML = `
      <div class="home-hero">
        <h1>Chào mừng trở lại! 👋</h1>
        <p>Chọn cấp độ HSK để bắt đầu luyện phản xạ dịch Việt → Trung, hoặc ôn từ vựng &amp; ngữ pháp riêng.</p>
      </div>
      <div class="section-title">Khóa học theo cấp độ</div>
      <div class="course-grid">${cards}</div>
      <div class="section-title">Ôn tập chuyên đề</div>
      <div class="quick-grid">
        <div class="quick-card" data-nav="vocab/hsk1"><span class="icon">🔤</span><div><strong>Từ vựng</strong><span>Flashcard theo cấp độ</span></div></div>
        <div class="quick-card" data-nav="grammar/hsk1"><span class="icon">📘</span><div><strong>Ngữ pháp</strong><span>Điểm ngữ pháp + bài tập</span></div></div>
      </div>
    `;
  }

  /* ---------- COURSE (lesson list) VIEW ---------- */
  function renderCourse(levelId) {
    const c = COURSES[levelId];
    if (!c) return navigate("#/home");
    setBreadcrumb(c.title);
    let body;
    if (c.comingSoon || !c.lessons.length) {
      body = `<div class="empty-state"><div class="icon">🚧</div>
        <p><strong>${c.title}</strong> đang được biên soạn và sẽ sớm ra mắt.</p>
        <p>Trong lúc chờ đợi, bạn có thể luyện HSK1–HSK4 hoặc ôn từ vựng, ngữ pháp.</p></div>`;
    } else {
      body = `<div class="lesson-list">${c.lessons.map(l => {
        const prog = state.progress[l.id];
        const label = prog ? `Đã luyện • tốt nhất ${prog.bestPct}%` : `Chưa học: 0/${l.sentences.length}`;
        return `<div class="lesson-card" data-nav="lesson/${levelId}/${l.id}">
          <div><h4>${l.title}</h4><div class="lesson-meta">${label} · ${l.sentences.length} câu</div></div>
          <span class="lesson-chevron">›</span>
        </div>`;
      }).join("")}</div>`;
    }
    $("#view").innerHTML = `
      <button class="back-link" data-nav="home">← Trang chủ</button>
      <div class="home-hero"><h1>${c.title}</h1><p>${c.subtitle}</p></div>
      ${body}
    `;
  }

  /* ---------- PRACTICE (lesson) VIEW ---------- */
  function findLesson(levelId, lessonId) {
    const c = COURSES[levelId];
    if (!c) return null;
    return c.lessons.find(l => l.id === lessonId) || null;
  }

  function startSession(levelId, lesson) {
    state.session = {
      levelId,
      lesson,
      mode: "type",
      queue: shuffle(lesson.sentences.map((s, i) => ({ ...s, _idx: i }))),
      total: lesson.sentences.length,
      combo: 0,
      bestCombo: 0,
      correct: 0,
      wrong: 0,
      arrangeAnswer: [],   // array of {text, key}
      arrangeBank: [],     // array of {text, key, used}
      awaitingContinue: false
    };
  }

  function renderLesson(levelId, lessonId) {
    const lesson = findLesson(levelId, lessonId);
    if (!lesson) return navigate(`#/course/${levelId}`);
    if (!state.session || state.session.lesson.id !== lessonId) {
      startSession(levelId, lesson);
    }
    setBreadcrumb(`${COURSES[levelId].title} · ${lesson.title}`);
    renderPracticeScreen();
  }

  function renderPracticeScreen() {
    const s = state.session;
    if (!s) return;

    if (s.queue.length === 0) {
      renderSummary();
      return;
    }

    const current = s.queue[0];
    const doneCount = s.total - s.queue.length;
    const pct = Math.round((doneCount / s.total) * 100);

    $("#view").innerHTML = `
      <button class="back-link" data-nav="course/${s.levelId}">← ${COURSES[s.levelId].title}</button>
      <div class="practice-topline">
        <span class="practice-tag">${s.lesson.title}</span>
        <span class="remaining-tag">Còn lại: ${s.queue.length}</span>
        <span class="combo-badge">🔥 Combo ${s.combo}</span>
      </div>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>

      <div class="practice-card">
        <div class="mode-toggle">
          <button data-mode="type" class="${s.mode === "type" ? "active" : ""}">⌨️ Gõ Phím</button>
          <button data-mode="arrange" class="${s.mode === "arrange" ? "active" : ""}">🧩 Ghép Từ</button>
        </div>
        <div class="prompt-label">Dịch sang tiếng Trung:</div>
        <div class="prompt-vi">${escapeHtml(current.vi)}</div>
        <div id="modeArea"></div>
        <div id="feedbackArea"></div>
      </div>
    `;

    $all(".mode-toggle button", $("#view")).forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.mode === s.mode) return;
        s.mode = btn.dataset.mode;
        renderPracticeScreen();
      });
    });

    if (s.mode === "type") renderTypeMode(current);
    else renderArrangeMode(current);
  }

  function renderTypeMode(current) {
    const s = state.session;
    $("#modeArea").innerHTML = `
      <div class="type-input-row">
        <input type="text" id="hanziInput" lang="zh" placeholder="Nhập chữ Hán..." ${s.awaitingContinue ? "disabled" : ""} autocomplete="off">
        <button class="speak-btn" id="speakBtn" title="Nghe phát âm">🔊</button>
      </div>
      ${s.awaitingContinue
        ? `<button class="btn btn-primary btn-block" id="continueBtn">Tiếp tục →</button>`
        : `<button class="btn btn-primary btn-block" id="checkBtn">Kiểm tra (Enter)</button>`}
    `;
    const input = $("#hanziInput");
    if (!s.awaitingContinue) {
      input.focus();
      input.addEventListener("keydown", e => { if (e.key === "Enter") checkTypeAnswer(); });
      $("#checkBtn").addEventListener("click", checkTypeAnswer);
    } else {
      $("#continueBtn").addEventListener("click", advanceAfterFeedback);
    }
    $("#speakBtn").addEventListener("click", () => speak(current.hanzi));
  }

  function checkTypeAnswer() {
    const s = state.session;
    const current = s.queue[0];
    const input = $("#hanziInput");
    const val = input.value.trim();
    if (!val) { input.focus(); return; }
    const isCorrect = val === current.hanzi.trim();
    handleResult(isCorrect, current, buildCharDiff(current.hanzi, val));
  }

  function buildCharDiff(target, input) {
    const len = Math.max(target.length, input.length);
    let html = "";
    for (let i = 0; i < len; i++) {
      const t = target[i], u = input[i];
      if (t === undefined) continue;
      if (u === undefined) html += `<span class="ch missing">${escapeHtml(t)}</span>`;
      else if (t === u) html += `<span class="ch correct">${escapeHtml(t)}</span>`;
      else html += `<span class="ch wrong">${escapeHtml(t)}</span>`;
    }
    return html;
  }

  function renderArrangeMode(current) {
    const s = state.session;
    s.arrangeAnswer = [];
    s.arrangeBank = shuffle(current.segments.map((text, i) => ({ text, key: "seg" + i })));
    paintArrange(current);
  }

  function paintArrange(current) {
    const s = state.session;
    $("#modeArea").innerHTML = `
      <div class="arrange-answer" id="arrangeAnswer"></div>
      <div class="arrange-bank" id="arrangeBank"></div>
      <div class="hint-row">
        <button class="btn btn-secondary" id="undoBtn">↩ Xóa từ cuối</button>
        <button class="speak-btn" id="speakBtn" title="Nghe phát âm">🔊</button>
      </div>
      ${s.awaitingContinue
        ? `<button class="btn btn-primary btn-block" id="continueBtn" style="margin-top:14px;">Tiếp tục →</button>`
        : `<button class="btn btn-primary btn-block" id="checkBtn" style="margin-top:14px;">Kiểm tra ghép từ</button>`}
    `;
    renderArrangeChips(current);
    $("#speakBtn").addEventListener("click", () => speak(current.hanzi));
    $("#undoBtn").addEventListener("click", () => {
      if (s.awaitingContinue || !s.arrangeAnswer.length) return;
      s.arrangeAnswer.pop();
      renderArrangeChips(current);
    });
    if (s.awaitingContinue) {
      $("#continueBtn").addEventListener("click", advanceAfterFeedback);
    } else {
      $("#checkBtn").addEventListener("click", () => checkArrangeAnswer(current));
    }
  }

  function renderArrangeChips(current) {
    const s = state.session;
    const answerHtml = s.arrangeAnswer.map(chip =>
      `<button class="word-chip" data-key="${chip.key}" data-zone="answer">${escapeHtml(chip.text)}</button>`
    ).join("") || '<span style="color:var(--text-muted);font-size:13px;">Chạm vào từ bên dưới để ghép câu…</span>';
    const usedKeys = new Set(s.arrangeAnswer.map(c => c.key));
    const bankHtml = s.arrangeBank.map(chip =>
      `<button class="word-chip${usedKeys.has(chip.key) ? " placed" : ""}" data-key="${chip.key}" data-zone="bank">${escapeHtml(chip.text)}</button>`
    ).join("");
    $("#arrangeAnswer").innerHTML = answerHtml;
    $("#arrangeBank").innerHTML = bankHtml;

    if (!s.awaitingContinue) {
      $all('.word-chip[data-zone="bank"]', $("#arrangeBank")).forEach(btn => {
        btn.addEventListener("click", () => {
          const key = btn.dataset.key;
          if (usedKeys.has(key)) return;
          const chip = s.arrangeBank.find(c => c.key === key);
          s.arrangeAnswer.push(chip);
          renderArrangeChips(current);
        });
      });
      $all('.word-chip[data-zone="answer"]', $("#arrangeAnswer")).forEach(btn => {
        btn.addEventListener("click", () => {
          const key = btn.dataset.key;
          s.arrangeAnswer = s.arrangeAnswer.filter(c => c.key !== key);
          renderArrangeChips(current);
        });
      });
    }
  }

  function checkArrangeAnswer(current) {
    const s = state.session;
    const built = s.arrangeAnswer.map(c => c.text);
    const isCorrect = built.length === current.segments.length &&
      built.every((t, i) => t === current.segments[i]);
    handleResult(isCorrect, current, null);
  }

  function handleResult(isCorrect, current, diffHtml) {
    const s = state.session;
    state.stats.attempted++;
    if (isCorrect) {
      state.stats.correct++;
      s.correct++;
      s.combo++;
      s.bestCombo = Math.max(s.bestCombo, s.combo);
    } else {
      s.wrong++;
      s.combo = 0;
    }
    saveStats();
    updateAccuracyRing();

    if (isCorrect) {
      s.queue.shift();
      $("#feedbackArea").innerHTML = `<div class="feedback-banner correct">✅ Chính xác!</div>`;
      setTimeout(() => { if (state.session === s) renderPracticeScreen(); }, 550);
    } else {
      // move to end of queue for spaced re-practice
      const item = s.queue.shift();
      s.queue.push(item);
      s.awaitingContinue = true;
      $("#feedbackArea").innerHTML = `
        <div class="feedback-banner wrong">
          ❌ Chưa đúng. Đáp án đúng là:
          <div class="feedback-answer">${diffHtml || escapeHtml(current.hanzi)}</div>
          <div class="feedback-pinyin">${escapeHtml(current.pinyin)}</div>
        </div>`;
      if (s.mode === "type") renderTypeMode(current);
      else paintArrange(current);
    }
  }

  function advanceAfterFeedback() {
    const s = state.session;
    s.awaitingContinue = false;
    renderPracticeScreen();
  }

  function renderSummary() {
    const s = state.session;
    const totalAnswers = s.correct + s.wrong;
    const pct = totalAnswers ? Math.round((s.correct / totalAnswers) * 100) : 100;
    state.progress[s.lesson.id] = {
      total: s.total,
      bestPct: Math.max(pct, (state.progress[s.lesson.id] || {}).bestPct || 0)
    };
    saveProgress();

    $("#view").innerHTML = `
      <div class="summary-card">
        <div class="big-emoji">${pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : "💪"}</div>
        <h2>Hoàn thành bài học!</h2>
        <p style="color:var(--text-muted)">${s.lesson.title}</p>
        <div class="summary-stats">
          <div><strong>${s.total}</strong><span>Câu đã học</span></div>
          <div><strong>${pct}%</strong><span>Độ chính xác</span></div>
          <div><strong>🔥 ${s.bestCombo}</strong><span>Combo cao nhất</span></div>
        </div>
        <div class="summary-actions">
          <button class="btn btn-primary" id="retryBtn">Học lại từ đầu</button>
          <button class="btn btn-secondary" data-nav="course/${s.levelId}">Danh sách bài học</button>
        </div>
      </div>
    `;
    $("#retryBtn").addEventListener("click", () => {
      startSession(s.levelId, s.lesson);
      renderPracticeScreen();
    });
  }

  /* ---------- VOCAB VIEW ---------- */
  function renderVocab(levelId) {
    if (!VOCAB[levelId]) levelId = "hsk1";
    setBreadcrumb("Từ vựng · " + COURSES[levelId].title);
    const words = VOCAB[levelId] || [];
    const learnedCount = words.filter(w => state.vocabLearned[levelId + "|" + w.hanzi]).length;

    const tabs = Object.keys(VOCAB).map(id =>
      `<button class="nav-item" style="width:auto;display:inline-flex;${id === levelId ? "background:var(--accent);color:#06231f;" : ""}" data-nav="vocab/${id}">${COURSES[id].title}</button>`
    ).join("");

    $("#view").innerHTML = `
      <button class="back-link" data-nav="home">← Trang chủ</button>
      <div class="home-hero"><h1>🔤 Từ vựng</h1><p>Nhấn vào thẻ để lật xem nghĩa. Nhấn ⭐ để đánh dấu từ đã thuộc.</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px;">${tabs}</div>
      <div class="vocab-toolbar"><strong>${COURSES[levelId].title}</strong><span>Đã thuộc: ${learnedCount}/${words.length}</span></div>
      <div class="vocab-grid" id="vocabGrid"></div>
    `;

    const grid = $("#vocabGrid");
    grid.innerHTML = words.map((w, i) => {
      const key = levelId + "|" + w.hanzi;
      const learned = state.vocabLearned[key];
      return `<div class="flashcard" data-i="${i}">
        <div class="flashcard-inner">
          <div class="flashcard-face front">
            <button class="star-btn" data-key="${key}" style="position:absolute;top:6px;right:8px;border:none;background:none;cursor:pointer;font-size:14px;opacity:${learned ? 1 : 0.3}">⭐</button>
            <div class="hz">${escapeHtml(w.hanzi)}</div>
            <div class="py">${escapeHtml(w.pinyin)}</div>
          </div>
          <div class="flashcard-face back">
            <div class="vi">${escapeHtml(w.vi)}</div>
            <div class="pos">${escapeHtml(w.pos || "")}</div>
          </div>
        </div>
      </div>`;
    }).join("");

    $all(".flashcard", grid).forEach(card => {
      card.addEventListener("click", () => card.classList.toggle("flipped"));
    });
    $all(".star-btn", grid).forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const key = btn.dataset.key;
        state.vocabLearned[key] = !state.vocabLearned[key];
        saveVocabLearned();
        renderVocab(levelId);
      });
    });
  }

  /* ---------- GRAMMAR VIEW ---------- */
  function renderGrammar(levelId) {
    if (!GRAMMAR[levelId]) levelId = "hsk1";
    setBreadcrumb("Ngữ pháp · " + COURSES[levelId].title);
    const points = GRAMMAR[levelId] || [];

    const tabs = Object.keys(GRAMMAR).map(id =>
      `<button class="nav-item" style="width:auto;display:inline-flex;${id === levelId ? "background:var(--accent);color:#06231f;" : ""}" data-nav="grammar/${id}">${COURSES[id].title}</button>`
    ).join("");

    $("#view").innerHTML = `
      <button class="back-link" data-nav="home">← Trang chủ</button>
      <div class="home-hero"><h1>📘 Ngữ pháp</h1><p>Nhấn vào từng điểm ngữ pháp để xem giải thích, ví dụ và làm bài tập nhỏ.</p></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px;">${tabs}</div>
      <div id="grammarList"></div>
    `;

    const list = $("#grammarList");
    list.innerHTML = points.map(p => `
      <div class="grammar-item" data-id="${p.id}">
        <div class="grammar-item-head"><span>${escapeHtml(p.title)}</span><span class="chevron">›</span></div>
        <div class="grammar-item-body">
          <div class="grammar-explain">${escapeHtml(p.explanation)}</div>
          ${p.examples.map(ex => `<div class="grammar-example">
            <div class="hz">${escapeHtml(ex.hanzi)}</div>
            <div class="py">${escapeHtml(ex.pinyin)}</div>
            <div class="vi">${escapeHtml(ex.vi)}</div>
          </div>`).join("")}
          <div class="grammar-quiz">
            ${p.exercises.map((ex, qi) => `
              <div class="quiz-q" data-answer="${escapeHtml(ex.answer)}">
                <div class="quiz-prompt">${qi + 1}. ${escapeHtml(ex.prompt)}</div>
                <div class="quiz-choices">
                  ${ex.choices.map(c => `<button class="quiz-choice" data-choice="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `).join("");

    $all(".grammar-item-head", list).forEach(head => {
      head.addEventListener("click", () => head.parentElement.classList.toggle("open"));
    });
    $all(".quiz-q", list).forEach(q => {
      const answer = q.dataset.answer;
      $all(".quiz-choice", q).forEach(btn => {
        btn.addEventListener("click", () => {
          if (q.dataset.answered) return;
          q.dataset.answered = "1";
          const correct = btn.dataset.choice === answer;
          btn.classList.add(correct ? "correct" : "wrong");
          if (!correct) {
            $all(".quiz-choice", q).forEach(b => { if (b.dataset.choice === answer) b.classList.add("correct"); });
          }
        });
      });
    });
  }

  /* ---------- master render ---------- */
  function render() {
    const route = getRoute();
    renderSidebar();
    $("#sidebar").classList.remove("open");

    if (route.name === "course") renderCourse(route.params[0]);
    else if (route.name === "lesson") renderLesson(route.params[0], route.params[1]);
    else if (route.name === "vocab") renderVocab(route.params[0] || "hsk1");
    else if (route.name === "grammar") renderGrammar(route.params[0] || "hsk1");
    else renderHome();

    window.scrollTo(0, 0);
  }

  /* ---------- global click delegation for [data-nav] ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-nav]");
    if (el) navigate("#/" + el.dataset.nav);
  });

  document.addEventListener("click", e => {
    if (e.target.closest("#menuBtn")) $("#sidebar").classList.toggle("open");
  });

  window.addEventListener("hashchange", render);

  document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    pickVoice();
    if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = pickVoice;
    $("#themeToggle").addEventListener("click", toggleTheme);
    updateAccuracyRing();
    render();
  });
})();
