const sass = require("sass");
const nodeSass = require("node-sass");

const sassPormise = (file) => {
  return new Promise((rev, rej) => {
    sass.render(
      {
        file,
      },
      function (err, result) {
        rev();
      }
    );
  });
};

const nodeSassPromise = (file) => {
  return new Promise((rev, rej) => {
    nodeSass.render(
      {
        file,
      },
      function (err, result) {
        rev();
      }
    );
  });
};


module.exports = {
    sassPormise,
    nodeSassPromise
}