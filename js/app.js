(function () {
  "use strict";

  const state = {
    level: 1,
    index: 0,
    playCount: 0,
    hintChars: 0,
    checked: false,
    voice: null,
    stats: loadStats()
  };

  const el = {
    levelTabs: document.getElementById("levelTabs"),
    currentIndex: document.getElementById("currentIndex"),
    totalCount: document.getElementById("totalCount"),
    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),
    playBtn: document.getElementById("playBtn"),
    replayBtn: document.getElementById("replayBtn"),
    playCount: document.getElementById("playCount"),
    voiceWarning: document.getElementById("voiceWarning"),
    userInput: document.getElementById("userInput"),
    checkBtn: document.getElementById("checkBtn"),
    hintBtn: document.getElementById("hintBtn"),
    pinyinBtn: document.getElementById("pinyinBtn"),
    answerBtn: document.getElementById("answerBtn"),
    nextBtn: document.getElementById("nextBtn"),
    feedback: document.getElementById("feedback"),
    feedbackDiff: document.getElementById("feedbackDiff"),
    feedbackScore: document.getElementById("feedbackScore"),
    feedbackPinyin: document.getElementById("feedbackPinyin"),
    feedbackEnglish: document.getElementById("feedbackEnglish"),
    statCorrect: document.getElementById("statCorrect"),
    statAttempted: document.getElementById("statAttempted"),
    statAccuracy: document.getElementById("statAccuracy")
  };

  function loadStats() {
    try {
      const raw = localStorage.getItem("dictation-stats");
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return { correct: 0, attempted: 0 };
  }

  function saveStats() {
    try {
      localStorage.setItem("dictation-stats", JSON.stringify(state.stats));
    } catch (e) { /* ignore */ }
  }

  function currentSentence() {
    return SENTENCE_BANK[state.level][state.index];
  }

  function pickVoice() {
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    const zh = voices.filter(v => /zh|chinese/i.test(v.lang) || /chinese/i.test(v.name));
    state.voice = zh.find(v => /zh-CN|cmn-Hans-CN/i.test(v.lang)) || zh[0] || null;
    el.voiceWarning.hidden = !!state.voice;
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      el.voiceWarning.hidden = false;
      el.voiceWarning.textContent = "⚠ Your browser does not support speech synthesis. Try Chrome or Edge.";
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    if (state.voice) utter.voice = state.voice;
    utter.rate = parseFloat(el.speedRange.value);
    window.speechSynthesis.speak(utter);
  }

  function playCurrent() {
    speak(currentSentence().hanzi);
    state.playCount += 1;
    el.playCount.textContent = "Played " + state.playCount + (state.playCount === 1 ? " time" : " times");
  }

  function resetForNewSentence() {
    state.playCount = 0;
    state.hintChars = 0;
    state.checked = false;
    el.playCount.textContent = "Played 0 times";
    el.userInput.value = "";
    el.feedback.hidden = true;
    el.feedbackPinyin.hidden = true;
    el.feedbackEnglish.hidden = true;
    el.currentIndex.textContent = state.index + 1;
    el.totalCount.textContent = SENTENCE_BANK[state.level].length;
    el.userInput.focus();
  }

  function goToLevel(level) {
    state.level = level;
    state.index = 0;
    [...el.levelTabs.children].forEach(btn => {
      btn.classList.toggle("active", Number(btn.dataset.level) === level);
    });
    resetForNewSentence();
  }

  function nextSentence() {
    const total = SENTENCE_BANK[state.level].length;
    state.index = (state.index + 1) % total;
    resetForNewSentence();
  }

  function diffChars(target, input) {
    const len = Math.max(target.length, input.length);
    let correctCount = 0;
    const parts = [];
    for (let i = 0; i < len; i++) {
      const t = target[i];
      const u = input[i];
      if (t === undefined) {
        parts.push({ ch: u, cls: "extra" });
      } else if (u === undefined) {
        parts.push({ ch: t, cls: "missing" });
      } else if (t === u) {
        parts.push({ ch: t, cls: "correct" });
        correctCount++;
      } else {
        parts.push({ ch: t, cls: "wrong" });
      }
    }
    return { parts, correctCount, total: target.length };
  }

  function renderDiff(parts) {
    el.feedbackDiff.innerHTML = parts
      .map(p => `<span class="ch ${p.cls}">${escapeHtml(p.ch)}</span>`)
      .join("");
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function checkAnswer() {
    const target = currentSentence().hanzi;
    const input = el.userInput.value.trim();
    if (!input) {
      el.userInput.focus();
      return;
    }
    const { parts, correctCount, total } = diffChars(target, input);
    renderDiff(parts);
    const pct = Math.round((correctCount / total) * 100);
    el.feedbackScore.textContent = `${correctCount} / ${total} characters correct (${pct}%)`;
    el.feedback.hidden = false;

    if (!state.checked) {
      state.checked = true;
      state.stats.attempted += 1;
      if (pct === 100) state.stats.correct += 1;
      saveStats();
      updateStatsUI();
    }
  }

  function showPinyin() {
    el.feedbackPinyin.textContent = currentSentence().pinyin;
    el.feedbackPinyin.hidden = false;
    el.feedback.hidden = false;
  }

  function showAnswer() {
    const s = currentSentence();
    renderDiff([...s.hanzi].map(ch => ({ ch, cls: "correct" })));
    el.feedbackScore.textContent = "Answer revealed";
    el.feedbackPinyin.textContent = s.pinyin;
    el.feedbackPinyin.hidden = false;
    el.feedbackEnglish.textContent = s.english;
    el.feedbackEnglish.hidden = false;
    el.feedback.hidden = false;
  }

  function giveHint() {
    const target = currentSentence().hanzi;
    state.hintChars = Math.min(state.hintChars + 1, target.length);
    const current = el.userInput.value;
    if (current.length < state.hintChars) {
      el.userInput.value = target.slice(0, state.hintChars);
    }
    el.userInput.focus();
  }

  function updateStatsUI() {
    el.statCorrect.textContent = state.stats.correct;
    el.statAttempted.textContent = state.stats.attempted;
    el.statAccuracy.textContent = state.stats.attempted
      ? Math.round((state.stats.correct / state.stats.attempted) * 100) + "%"
      : "--%";
  }

  function bindEvents() {
    el.levelTabs.addEventListener("click", e => {
      const btn = e.target.closest(".level-tab");
      if (!btn) return;
      goToLevel(Number(btn.dataset.level));
    });

    el.playBtn.addEventListener("click", playCurrent);
    el.replayBtn.addEventListener("click", playCurrent);

    el.speedRange.addEventListener("input", () => {
      el.speedValue.textContent = parseFloat(el.speedRange.value).toFixed(1) + "x";
    });

    el.checkBtn.addEventListener("click", checkAnswer);
    el.hintBtn.addEventListener("click", giveHint);
    el.pinyinBtn.addEventListener("click", showPinyin);
    el.answerBtn.addEventListener("click", showAnswer);
    el.nextBtn.addEventListener("click", nextSentence);

    el.userInput.addEventListener("keydown", e => {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        checkAnswer();
      }
    });

    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = pickVoice;
    }
  }

  function init() {
    bindEvents();
    pickVoice();
    updateStatsUI();
    resetForNewSentence();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
