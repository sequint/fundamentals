// Function that takes in a number and returns it's triangled value using recursion
// Passed number represents a position in a conceptual array
// The result should be the position + the previous value in the array
// Time Complexity: O(N)

const getTriangledNumber = (target: number, position: number = 0, priorValue: number = 0): number => {
  // Base case
  if (position === target) {
    return position + priorValue
  }

  return getTriangledNumber(target, position + 1, position + priorValue)
}

// Execution script
console.log(getTriangledNumber(7))
