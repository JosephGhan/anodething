const chalk = require('chalk');
 
var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr);
console.log(chalk.blue(arr));
