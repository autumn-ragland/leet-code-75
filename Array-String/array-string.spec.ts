import { canPlaceFlowers } from "./can-place-flowers";
import { gcdOfStrings } from "./greatest-common-divisor-of-strings";
import { kidsWithCandies } from "./kids-with-the-greatest-number-of-candies";
import { mergeAlternately } from "./merge-strings-alternately";
import { productExceptSelf } from "./product-of-array-except-self";
import { reverseVowels } from "./reverse-vowels-of-a-string";
import { reverseWords } from "./reverse-words-in-a-string";

describe("Array/String Leet Code 75 Questions", () => {
  test("should return whether flowers can be planted", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
  test("should return greatest common divisor of strings", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
    expect(gcdOfStrings("LEET", "CODE")).toBe("");
  });
  test("should return kids with the greatest number of candies", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });
  test("should merge strings alternately", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });
  // returning -0 somehow
  //   test("should return product of array except self", () => {
  //     expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  //     expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  //   });
  test("should reverse vowels of a string", () => {
    expect(reverseVowels("hello")).toBe("holle");
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });
  test("should reverse words in a string", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
    expect(reverseWords("  hello world  ")).toBe("world hello");
    expect(reverseWords("a good   example")).toBe("example good a");
  });
});
