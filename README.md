# Scoping & Optional Chaining – Masai Assignment

## Problem Focus
- let / const / var and block scope
- optional chaining (?.) to safely access nested properties

## Files
- index.html
- script.js
- README.md

## Part (a) — Scoping
```js
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // ReferenceError: x is not defined
