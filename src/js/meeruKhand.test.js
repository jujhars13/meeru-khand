const assert = require("chai").assert;

const meruKhand = require("./meeruKhand.js");

describe("meerukhand", () => {
  it("returns the right sequence for the first line of bilaval and 3 surs", () => {
    const results = meruKhand("srgmpdnß", 3);
    const expected = [
      ["s", "r", "g"],
      ["r", "g", "s"],
      ["s", "g", "r"],
      ["g", "s", "r"],
      ["r", "g", "s"],
      ["g", "r", "s"],
    ];
    assert.deepEqual(results[0], expected);
  });

  it("returns the right sequence for first line of siri and 3 surs", () => {
    const results = meruKhand("sRgMpDnß", 3);
    const expected = [
      ["s", "R", "g"],
      ["R", "g", "s"],
      ["s", "g", "R"],
      ["g", "s", "R"],
      ["R", "g", "s"],
      ["g", "R", "s"],
    ];
    assert.deepEqual(results[0], expected);
  });

});
