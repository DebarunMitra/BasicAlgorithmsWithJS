/**
 * [truncateString]
 * @description [Truncate the string with defined length params]
 * @param {string} str  
 * @param {number} num 
 * @return [(first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.]
 */
function truncateString(str, num) {
  return str.replace(str.substr(num), "...");
}

console.log(truncateString("Truncate the string with defined length params", 20));
//output: Truncate the string ...
