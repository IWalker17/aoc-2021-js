const path = require("path");
const day02 = require("../solutions/day02.js");

const DEFAULT_RESOURCE_PATH = path.join(__dirname, "..", "assets", "day02.txt");
const GIVEN_INPUT = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

describe("day02", () => {
  describe("getHorizontalPostitionByFinalDepth", () => {
    it(
      "should return the total of the final horizontalPosition " +
        "multiplied by the final depth from the given input",
      () => {
        const exptected = 150;
        const actual = day02.getHorizontalPostitionByFinalDepth(GIVEN_INPUT);

        expect(actual).toBe(exptected);
      }
    );

    it(`shoult return the total of the final horizontalPosition
         multiplied by the final depth from ${DEFAULT_RESOURCE_PATH}`, () => {
      const exptected = 1507611;
      const actual = day02.getHorizontalPostitionByFinalDepth();

      expect(actual).toBe(exptected);
    });
  });

  describe("getHorizontalPostitionByFinalDepthWithAim", () => {
    it(
      "should return the total of the final horizontalPosition " +
        "multiplied by the final depth with aim from the given input",
      () => {
        const exptected = 900;
        const actual =
          day02.getHorizontalPostitionByFinalDepthWithAim(GIVEN_INPUT);

        expect(actual).toBe(exptected);
      }
    );

    it(`should return the total of the final horizontalPosition
         multiplied by the final depth with aim from ${DEFAULT_RESOURCE_PATH}`, () => {
      const exptected = 1880593125;
      const actual = day02.getHorizontalPostitionByFinalDepthWithAim();

      expect(actual).toBe(exptected);
    });
  });
});
