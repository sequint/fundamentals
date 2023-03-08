// Function that takes in a number and returns it's triangled value using recursion
// Passed number represents a position in a conceptual array
// The result should be the position + the previous value in the array
// Time Complexity: O(N)

const getTriangledNumber = (position: number, numbers: number[] = []): number => {
  console.log(position)
  console.log(numbers)
  // Base case: if the length of the array is equal to the position, this is the target value
  if (numbers.length > 0 && position === numbers.length) {
    console.log(numbers[numbers.length - 1] + position)
    return numbers[numbers.length - 1] + position
  }

  // Pass the value from base case back to the top of the call stack
  // The second arg represents the new triangled number added to the numbers array
  return getTriangledNumber(position, [...numbers, position + numbers[numbers.length - 2]])
}

// Execution script
console.log(getTriangledNumber(7))
