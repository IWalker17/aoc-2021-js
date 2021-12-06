const fs = require("fs");
const path = require("path");

const DEFAULT_INPUT_PATH = path.join(__dirname, "..", "assets", "day02.txt");

const day02 = {
  getHorizontalPostitionByFinalDepth: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day01.txt'");
      }
    }

    let depth = 0;
    let horizontalPosition = 0;
    for (let i = 0; i < input.length; i++) {
      const [direction, amount] = input[i].split(" ");
      if (direction === "forward") {
        horizontalPosition += parseInt(amount);
        continue;
      }
      if (direction === "down") {
        depth += parseInt(amount);
        continue;
      }
      if (direction === "up") {
        depth -= parseInt(amount);
        continue;
      }
    }

    return parseInt(depth) * parseInt(horizontalPosition);
  },
  getHorizontalPostitionByFinalDepthWithAim: (input) => {
    if (!input) {
      try {
        input = fs.readFileSync(DEFAULT_INPUT_PATH, "utf-8").split("\n");
      } catch (error) {
        throw new Error("Failed to read default input from file 'day01.txt'");
      }
    }

    let aim = 0;
    let depth = 0;
    let horizontalPosition = 0;
    for (let i = 0; i < input.length; i++) {
      const [direction, amount] = input[i].split(" ");
      if (direction === "forward") {
        horizontalPosition += parseInt(amount);
        depth += parseInt(amount) * parseInt(aim);
        continue;
      }
      if (direction === "down") {
        aim += parseInt(amount);
        continue;
      }
      if (direction === "up") {
        aim -= parseInt(amount);
        continue;
      }
    }
    return parseInt(depth) * parseInt(horizontalPosition);
  },
};

module.exports = day02;
