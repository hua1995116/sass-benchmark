const sass = require("sass");
const nodeSass = require("node-sass");
const { sassPormise, nodeSassPromise } = require('./util');
const file = "./source/src/date-picker/date-picker.scss";

(async () => {
  console.log(process.memoryUsage());
  const COUNT = 50;
  for (let i = 0; i < COUNT; i++) {
    await nodeSassPromise(file);
    // await sassPormise(file)
    // sass.renderSync({
    //   file,
    // });
  }
  console.log(process.memoryUsage());
})();

