/*Вернуть строку в которой каждый символ уникален.
"SSttrriinngg" --> "String" */

function unigueChar(str) {
  const arr = str.split("");
  return Array.from(new Set(arr)).join("");
}
