# 🎨 Background Color Generator

A simple yet interactive web app that lets users change the background color of the page either by clicking on randomly generated color buttons or by manually entering a valid CSS color value.

🔗 **Live Demo:** [Add your GitHub Pages link here]

---

## ✨ Features

- 🎲 5 random color buttons generated on every page load
- ⌨️ Manual color input — accepts color names, HEX codes, and RGB values
- ✅ Input validation using `CSS.supports()` to detect invalid colors
- ⚠️ Smart warning system for empty input, invalid colors, and duplicate submissions
- 📱 Fully responsive layout (mobile-friendly)
- 🎨 Custom dark luxury / dusty rose UI theme

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, `clamp()` for responsive sizing, custom theming
- **JavaScript (Vanilla)** — DOM manipulation, Event Listeners, Form handling

---

## 🧠 What I Learned

- Using `CSS.supports()` to validate color values before applying them
- Handling form submission with `event.preventDefault()`
- Creating dynamic DOM elements with `document.createElement()`
- Managing application state with variables (`prevColor`) to prevent duplicate actions
- Writing reusable functions (`displayColor`, `warnMessage`) to avoid code repetition
- Debugging edge cases — like case-sensitivity (`"Red"` vs `"red"`) in string comparisons
- Building responsive UI using `clamp()` instead of fixed breakpoints

---

## 📂 Project Structure
