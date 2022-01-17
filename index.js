const day01 = require("./src/solutions/day01.js");
const day02 = require("./src/solutions/day02.js");
const day03 = require("./src/solutions/day03.js");

const init = () => {
  const requested_day = process.argv[2];
  if (requested_day === "day01") {
    console.log(
      "Solution to day01 [PART 1] is: ",
      day01.getIndividualDepthIncreases()
    );
    console.log(
      "Solution to day01 [PART 2] is: ",
      day01.getThreeMeasurementsSlidingWindowDepthIncreases()
    );
    return;
  }

  if (requested_day === "day02") {
    console.log(
      "Solution to day02 [PART 1] is: ",
      day02.getHorizontalPostitionByFinalDepth()
    );
    console.log(
      "Solution to day02 [PART 2] is: ",
      day02.getHorizontalPostitionByFinalDepthWithAim()
    );
    return;
  }

  if (requested_day === "day03") {
    console.log("Solution to day03 [PART 1] is: ", day03.getPowerConsumption());
    console.log(
      "Solution to day03 [PART 2] is: ",
      day03.getLifeSupportRating()
    );
    return;
  }

  console.error(`No solution found for given day: ${requested_day}.`);
};

init();
