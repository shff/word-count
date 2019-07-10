const wordCounter = require("./word_counter.js");

test("it returns the most used word", () => {
  const text = "yes yes no";
  expect(wordCounter({ text }).topWord).toBe("yes");
});

test("it returns the amount of times it was used", () => {
  const text = "yes yes no";
  expect(wordCounter({ text }).usages).toBe(2);
});

test("it returns the counter object", () => {
  const text = "yes yes no";
  expect(wordCounter({ text }).counter).toBeInstanceOf(Object);
});
