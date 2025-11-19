import { canPlaceFlowers } from "../can-place-flowers";
describe("Can Place Flowers", () => {
  test("should only place flowers in adjacent plots", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });
});
