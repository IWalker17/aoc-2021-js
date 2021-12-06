const day01 = require("./src/solutions/day01.js");
const day02 = require("./src/solutions/day02.js");

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
  }
  console.error(`No solution found for given day: ${requested_day}.`);
};

init();
