const path = require("path");
const day01 = require("../solutions/day01.js");

const DEFAULT_RESOURCE_PATH = path.join(__dirname, "..", "assets", "day01.txt");
const GIVEN_INPUT = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("day01", () => {
  describe("getNumOfIndividualDepthIncreases", () => {
    it("should return the number of increases from the given input", () => {
      const expected = 7;
      const actual = day01.getIndividualDepthIncreases(GIVEN_INPUT);

      expect(actual).toBe(expected);
    });

    it(`should return the number of increases from "${DEFAULT_RESOURCE_PATH}" when input is not given`, () => {
      const expected = 1476;
      const actual = day01.getIndividualDepthIncreases();

      expect(actual).toBe(expected);
    });
  });

  describe("getThreeMeasurementsSlidingWindowDepthIncreases", () => {
    it("should return the number of increases from the sum of three measurements in a sliding window, given input", () => {
      const expected = 5;
      const acutal =
        day01.getThreeMeasurementsSlidingWindowDepthIncreases(GIVEN_INPUT);

      expect(acutal).toBe(expected);
    });

    it(`should return the number of increases from the sum of three measurements in a sliding window, 
      from ${DEFAULT_RESOURCE_PATH} when input is not given`, () => {
      const expected = 1523;
      const acutal = day01.getThreeMeasurementsSlidingWindowDepthIncreases();

      expect(acutal).toBe(expected);
    });
  });
});
