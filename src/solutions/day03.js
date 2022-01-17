const fs = require("fs");
const path = require("path");

const DEFAULT_INPUT_PATH = path.join(__dirname, "..", "assets", "day03.txt");
const ONE = "1";
const ZERO = "0";

const getPositionDetails = (input) => {
  let positionDetails = {};
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (!positionDetails[i]) {
        positionDetails[i] = {
          ones: 0,
          zeros: 0,
        };
      }
      if (input[j][i] === ONE) {
        positionDetails[i].ones++;
      }
      if (input[j][i] === ZERO) {
        positionDetails[i].zeros++;
      }
    }
  }

  return positionDetails;
};

const getOxygenGeneratorRating = (input, index = 0) => {
  if (input.length === 1) return input;

  let newIndex = index + 1;
  const positionDetails = getPositionDetails(input);

  let newInput = [];
  if (positionDetails[index].zeros > positionDetails[index].ones) {
    newInput = input.filter((item) => item.charAt(index) === ZERO);
    return getOxygenGeneratorRating(newInput, newIndex);
  }
  if (positionDetails[index].zeros <= positionDetails[index].ones) {
    newInput = input.filter((item) => item.charAt(index) === ONE);
    return getOxygenGeneratorRating(newInput, newIndex);
  }
};

const getCo2GeneratorRating = (input, index = 0) => {
  if (input.length === 1) return input;

  let newIndex = index + 1;
  const positionDetails = getPositionDetails(input);

  let newInput = [];
  if (positionDetails[index].zeros > positionDetails[index].ones) {
    newInput = input.filter((item) => item.charAt(index) === ONE);
    return getCo2GeneratorRating(newInput, newIndex);
  }
  if (positionDetails[index].zeros <= positionDetails[index].ones) {
    newInput = input.filter((item) => item.charAt(index) === ZERO);
    return getCo2GeneratorRating(newInput, newIndex);
  }
};

const day03 = {
  getPowerConsumption: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day03.txt'");
      }
    }

    let gammaRate = [];
    let epsilonRate = [];
    for (let i = 0; i < input[0].length; i++) {
      let ones = 0;
      let zeros = 0;
      for (let j = 0; j < input.length; j++) {
        if (input[j][i] === ONE) {
          ones++;
        }
        if (input[j][i] === ZERO) {
          zeros++;
        }
      }
      if (ones < zeros) {
        gammaRate.push(1);
        epsilonRate.push(0);
      }

      if (ones > zeros) {
        gammaRate.push(0);
        epsilonRate.push(1);
      }
    }
    return parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2);
  },
  getLifeSupportRating: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day03.txt'");
      }
    }

    const oxygenRating = getOxygenGeneratorRating(input);
    const co2Rating = getCo2GeneratorRating(input);
    const oxygenRatingValue = parseInt(oxygenRating[0], 2);
    const co2RatingValue = parseInt(co2Rating[0], 2);

    return oxygenRatingValue * co2RatingValue;
  },
};

module.exports = day03;
