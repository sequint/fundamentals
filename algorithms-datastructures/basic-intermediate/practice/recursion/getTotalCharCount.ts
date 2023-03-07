// Function that takes in an array of strings and returns total character count

const getTotalCharCount = (strings: string[]): number => {
  // Base case
  if (strings.length === 1) {
    // Return the length of the only string value in the array
    return strings[0].length
  }

  // Return the value of the length of the first string value
  // plus the value of all other string lengths
  return strings[0].length + getTotalCharCount(strings.slice(1))
}

// Execution script
const strings: string[] = ['ab', 'c', 'def', 'ghij']
console.log(getTotalCharCount(strings))
