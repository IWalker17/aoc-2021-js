const fs = require("fs");
const path = require("path");

const DEFAULT_INPUT_PATH = path.join(__dirname, "..", "assets", "day01.txt");

const day01 = {
  getIndividualDepthIncreases: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day01.txt'");
      }
    }

    let increases = 0;
    for (let i = 0; i < input.length; i++) {
      if (i === input.length - 1) {
        // no next depth measurement - exit loop
        break;
      }

      if (input[i] < input[i + 1]) {
        increases++;
      }
    }
    return increases;
  },
  getThreeMeasurementsSlidingWindowDepthIncreases: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day01.txt'");
      }
    }

    let slidingWindowMeasurements = [];
    for (let i = 0; i < input.length - 2; i++) {
      slidingWindowMeasurements.push(
        parseInt(input[i]) + parseInt(input[i + 1]) + parseInt(input[i + 2])
      );
    }
    return day01.getIndividualDepthIncreases(slidingWindowMeasurements);
  },
};

module.exports = day01;
