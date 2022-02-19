const fs = require("fs");
const path = require("path");

const task1 = require('./taskOne');
const task2 = require('./taskTwo');
const task3 = require('./taskThree');

const textForTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const basicWay = path.join(__dirname, 'resolvedTask')

fs.mkdirSync(basicWay);
task1.start(textForTest, basicWay);
task2.start(textForTest, basicWay);
task3.start(basicWay);