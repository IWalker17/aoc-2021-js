const path = require("path");
const day03 = require("../solutions/day03.js");

const DEFAULT_RESOURCE_PATH = path.join(__dirname, "..", "assets", "day03.txt");
const GIVEN_INPUT = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

describe("day03", () => {
  describe("getPowerConsumption", () => {
    it(
      "should return the power consumption by multiplying the " +
        "gamma rate by the epsilon rate from the given input",
      () => {
        const exptected = 198;
        const actual = day03.getPowerConsumption(GIVEN_INPUT);

        expect(actual).toBe(exptected);
      }
    );

    it(`should return the power consumption by multiplying the 
    gamma rate by the epsilon rate from ${DEFAULT_RESOURCE_PATH}`, () => {
      const exptected = 3923414;
      const actual = day03.getPowerConsumption();

      expect(actual).toBe(exptected);
    });
  });

  describe("getLifeSupportRating", () => {
    it(
      "should return the life support rating by multiplying the oxygen " +
        "generator by the CO2 scrubber rating from the given input",
      () => {
        const exptected = 230;
        const actual = day03.getLifeSupportRating(GIVEN_INPUT);

        expect(actual).toBe(exptected);
      }
    );

    it(`should return the life support rating by multiplying the oxygen
    generator by the CO2 scrubber rating from ${DEFAULT_RESOURCE_PATH}`, () => {
      const exptected = 5852595;
      const actual = day03.getLifeSupportRating();

      expect(actual).toBe(exptected);
    });
  });
});
