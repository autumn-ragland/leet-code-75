import { canPlaceFlowers } from "./can-place-flowers";
import { gcdOfStrings } from "./greatest-common-divisor-of-strings";
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
});
