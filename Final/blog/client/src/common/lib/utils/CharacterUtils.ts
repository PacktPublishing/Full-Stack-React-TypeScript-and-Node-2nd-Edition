export function upperCaseFirstLetterOfWords(sentence: string) {
  const words = sentence.split(" ");
  let finalSentence = "";
  for (let i = 0; i < words.length; i++) {
    finalSentence += " " + words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return finalSentence;
}
