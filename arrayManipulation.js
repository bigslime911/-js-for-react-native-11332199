
 // TASK ONE
function processArray(arr) {
    return arr.map(num => num % 2 === 0 ? num * num : num * 3);
  }
  
  const numbers = [13, 7, 3, 6, 10];
  const processedArray = processArray(numbers);
  console.log(processedArray); 
