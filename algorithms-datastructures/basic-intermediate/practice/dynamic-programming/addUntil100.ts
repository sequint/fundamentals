// Update function that takes an array of numbers and adds them together
// Skip any numbers in the array that push the sum over 100
// Original function with unessesary recursion calls listed below the execution spript
// Fecactor uses dynamic programming technique of assigning recursive call to one
// variable to eliminate multiple calls to add to the stack

const addUntil100 = (array: number[]): number => {
  // Base case
  if (array.length === 0) {
    return 0
  }

  // Variable initialized with recursive call to fix multiple recursive calls
  const numberToAdd: number = addUntil100(array.slice(1))

  // If the number to add plus the current zero index is larger then 100
  // only return the number to add
  if (array[0] + numberToAdd > 100) {
    return numberToAdd
  }
  else {
    return array[0] + numberToAdd
  }
}

// Execution script
const array: number[] = [1, 10, 342, 78, 34]
console.log(addUntil100(array))




// Original function with unessesary recursive calls
const addUntil100Original = (array: number[]): number => {
  // Base case
  if (array.length === 0) {
    return 0
  }

  if (array[0] + addUntil100Original(array.slice(1)) > 100) {
    return addUntil100Original(array.slice(1))
  }
  else {
    return array[0] + addUntil100Original(array.slice(1))
  }
}