const nxPreset = require("@nrwl/jest/preset");
const esModules = ["@coolon/pectin"].join("|");
module.exports = {
  ...nxPreset,
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  transformIgnorePatterns: [`node_modules/?!(${esModules})`],
  resolver: "@nrwl/jest/plugins/resolver",
  moduleFileExtensions: ["ts", "js", "html"],
  coverageReporters: ["html"],
};
