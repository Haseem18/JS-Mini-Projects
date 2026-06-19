# 🧮 Mini Calculator

A clean and responsive calculator built with **Vanilla JavaScript** that performs basic arithmetic operations with support for decimal numbers. This project focuses on practicing DOM manipulation, form handling, conditional logic, and handling floating-point precision in JavaScript.

🔗 **Live Demo:** https://haseem18.github.io/JS-Mini-Projects/04-Mini-Calculator/

---

## ✨ Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 🧮 Modulus
* ⚡ Power (`xʸ`)
* 🔢 Supports decimal values using the `step="any"` attribute
* 🛡️ Prevents division by zero
* 📱 Fully responsive design
* 🎨 Modern dark UI with emerald accent

---

## 🛠️ Tech Stack

* **HTML5** — Semantic structure and forms
* **CSS3** — Flexbox, responsive layout, modern UI styling
* **JavaScript (Vanilla)** — DOM manipulation, Event handling, Conditional logic, Mathematical operations

---

## 🧠 What I Learned

* Handling form submission with `event.preventDefault()`
* Working with numeric input using `Number()`
* Using `switch` statements to perform different operations
* Validating user inputs before calculation
* Preventing division by zero
* Supporting decimal input using the `step="any"` attribute
* Fixing JavaScript floating-point precision issues (e.g. `0.1 + 0.2`) using:

```javascript
Math.round((num1 + num2) * 100) / 100;
```

* Updating the DOM dynamically with calculation results

---

## 📂 Project Structure

```text
04-Mini-Calculator/

├── index.html
├── style.css
└── main.js
```

---

## 🙏 Credits

Built while learning JavaScript fundamentals as part of the **Thunder Batch (100 Days of Code)** program by **Rohit Negi** (Coder Army).

---

## 👤 Author

**Haseem** — https://github.com/Haseem18
