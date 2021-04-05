/**
 * meerukhand.js
 * function to output meerukhand swars for a given scale
 * 2016-03-31 jujhar@jujhar.com
 */

var surs = [
  ["S", "R", "G"],
  ["R", "G", "M"],
  ["G", "M", "P"],
  ["M", "P", "D"],
  ["P", "D", "N"],
  ["D", "N", "S^"],
];

const patterns = {
  3: [
    [1, 2, 3],
    [2, 1, 3],
    [1, 3, 2],
    [3, 1, 2],
    [2, 3, 1],
    [3, 2, 1],
  ],
  4: [
    [1, 2, 3, 4],
    [2, 1, 3, 4],
    [1, 3, 2, 4],
    [3, 1, 2, 4],
    [2, 3, 1, 4],
    [3, 2, 1, 4],
  ],
};

module.exports = (inputSurs, number = 3) => {
  const overallOutput = [];
  const pattern = patterns[number];
  console.log(pattern);
  surs.map((surSet) => {
    let set = [];

    pattern.forEach((el, index, arr) => {
      let output = el.map((e) => surSet[e - 1]);
      set.push(output);
    });
    overallOutput.push(set);
  });
  return overallOutput;
};
