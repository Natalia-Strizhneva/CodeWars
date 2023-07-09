//вернуть строку, в которой каждый символ удваивается

const doubleChar = (str) =>
  str
    .split("")
    .map((char) => char + char)
    .join("");
