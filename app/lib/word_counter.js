const WORDS_REGEX = /(\w+)/g;

const extractWords = string => string.match(WORDS_REGEX);

const countFrequency = array =>
  array.reduce((a, item) => ({ ...a, [item]: 1 + (a[item] || 0) }), {});

const rankObject = counter =>
  Object.keys(counter).sort((a, b) => counter[b] - counter[a]);

const rankWords = data => {
  const sentences = data.text;
  const words = extractWords(sentences);
  const counter = countFrequency(words);
  const ranking = rankObject(counter);

  return {
    topWord: ranking[0],
    usages: counter[ranking[0]],
    counter
  };
};

export default rankWords;
