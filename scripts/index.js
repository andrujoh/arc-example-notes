const packageJsonVersion = require("../package.json");
// const sandbox = require("@architect/sandbox");
const ports = {
  _arc: 3344,
  // http: port + 1,
  // events: port + 2,
  // tables: port + 3,
};

const arc_sandbox_config = { ports, version: packageJsonVersion.dependencies["@architect/functions"] };
console.log("arc_sandbox_config:", arc_sandbox_config);
process.ARC_SANDBOX = JSON.stringify(arc_sandbox_config);
