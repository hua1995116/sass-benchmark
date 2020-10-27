const sass = require("sass");
const nodeSass = require("node-sass");
const Benchmark = require("benchmark");
const { sassPormise, nodeSassPromise } = require('./util');
const suite = new Benchmark.Suite();
const file = "./source/src/date-picker/date-picker.scss";

suite
  .add("sass async", {
    defer: true,
    fn: async function (deferred) {
      await sassPormise(file);
      deferred.resolve();
    },
  })
  .add("sass sync", {
    defer: true,
    fn: async function (deferred) {
      sass.renderSync({
        file,
      });
      deferred.resolve();
    },
  })
  .add("node-sass async", {
    defer: true,
    fn: async function (deferred) {
      await nodeSassPromise(file);
      deferred.resolve();
    },
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
