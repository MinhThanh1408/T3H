//Excercise 1
const person = {
  firstName: 'Minh',
  lastName: 'Thanh',
};
function convertObjectKeyToValue1(obj) {
  const keys = Object.keys(obj).map((key) => key);
  const values = Object.values(obj).map((value) => value);
  const result = {};
  values.forEach((value, index) => {
    result[value] = keys[index];
  });
  return result;
}
function convertObjectKeyToValue2(obj) {
  const result = {};
  for (const key in obj) {
    result[obj[key]] = key;
  }
  console.log(result);
}
// convertObjectKeyToValue2(person);
//Excercise 2

function checkKey(obj, key) {
  const keys = Object.keys(obj);
  const result = keys.includes(key);
  return result;
}

// console.log(checkKey(person,'firstNam'));
// console.log(checkKey(person,'firstName'));

//Excercise 3

function convertPropertyToArray(obj) {
    const result = [];
    for(const key in obj){
        result.push([key, obj[key]]);
    }
    console.log(result);
}
convertPropertyToArray(person);
