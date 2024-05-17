
 // TASK ONE
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  
  const numbers = [13, 7, 3, 6, 10];
  const processedArray = processArray(numbers);
  console.log(processedArray); 

  // Task Two
  function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((str, index) => {
      return numberArr[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
    });
  }

const stringNames = ['Kwame', 'Orange', 'Hippopotamus', 'Dansoman', 'Awudome'];
const numberArray = [1, 2, 3, 4, 5];
const formattedStringArray = formatArrayStrings(stringNames, numberArray);

console.log(formattedStringArray);  