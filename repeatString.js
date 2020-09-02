//Repeat a String N number of times
function repeatStringNumTimes(string, number) {
  let result = "";
  for (let i = 0; i < number; i++) result += string+' ';
  return result;
}

console.log(repeatStringNumTimes("Repeat", 3));//output:- Repeat Repeat Repeat
