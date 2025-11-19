/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
*/

export function mergeAlternately(word1: string, word2: string): string {
  let mergedString = "";
  const lengthDiff = word1.length - word2.length;
  if (lengthDiff > 0) {
    for (let i = 0; i < word2.length; i++) {
      mergedString += word1[i];
      mergedString += word2[i];
    }

    mergedString += word1.slice(word1.length - lengthDiff);
  } else if (lengthDiff < 0) {
    for (let i = 0; i < word1.length; i++) {
      mergedString += word1[i];
      mergedString += word2[i];
    }

    mergedString += word2.slice(word2.length + lengthDiff);
  } else {
    for (let i = 0; i < word1.length; i++) {
      mergedString += word1[i];
      mergedString += word2[i];
    }
  }
  return mergedString;
}
