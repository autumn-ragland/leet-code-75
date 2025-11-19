/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/

export function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelPositions = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelPositions.push({ vowel: s[i], position: i });
    }
  }
  const reversedString = s.split("");
  for (let i = 0; i < vowelPositions.length; i++) {
    const reversedPlacement =
      vowelPositions[vowelPositions.length - (i + 1)].position;
    reversedString[reversedPlacement] = vowelPositions[i].vowel;
  }

  return reversedString.join("");
}
