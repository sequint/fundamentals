// Update function that takes an array of numbers and adds them together
// Skip any numbers in the array that push the sum over 100
// Original function with unessesary recursion calls listed below the execution spript












// Original function with unessesary recursive calls
const addUntil100 = (array: number[]): number => {
  // Base case
  if (array.length === 0) {
    return 0
  }

  if (array[0] + addUntil100(array.slice(1)) > 100) {
    return addUntil100(array.slice(1))
  }
  else {
    return array[0] + addUntil100(array.slice(1))
  }
}