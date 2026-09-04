# 中文听写 — Chinese Dictation Practice

A static website for practicing Chinese listening comprehension by ear: play a
Chinese sentence, type what you hear, and get instant character-by-character
feedback. Inspired by dictationchinese.com.

## Features

- Sentence bank organized by HSK level (1–6)
- Audio playback via the browser's built-in Web Speech API (no API keys, no
  backend, no sign-up)
- Adjustable playback speed
- Character-by-character diff after checking (correct / incorrect / missing /
  extra)
- Hint, show-pinyin, and show-answer/translation buttons
- Session accuracy stats, persisted in `localStorage`

## Running locally

No build step is required — it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Use a Chromium-based browser (Chrome, Edge) for the most reliable Chinese
text-to-speech voice support.

## Project structure

```
index.html        Page markup
css/style.css      Styling
js/app.js          App logic (playback, checking, stats)
data/sentences.js  HSK-leveled sentence bank (hanzi, pinyin, english)
```

## Adding sentences

Edit `data/sentences.js` and add `{ hanzi, pinyin, english }` objects to the
array for the relevant HSK level.
