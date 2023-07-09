/*Вернуть строку в которой каждый символ уникален.
"SSttrriinngg" --> "String" */

function doubleChar(str) {
  let arr = str.split("");
  return Array.from(new Set(arr)).join("");
}
