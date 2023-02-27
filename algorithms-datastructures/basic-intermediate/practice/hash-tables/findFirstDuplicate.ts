// Function that finds the first duplicate in an array
// Funtion should execute in linear (O(N)) time using a hash table

const findFirstDuplicate = (array: string[]): string => {
  let hashTable: any = {};
  let firstDuplicateValue: string = '';

  // Loop through the array and test if the current value is in the hash table
  for (const value of array) {
    // If the value is in the hash table, assign it to first duplicate and break
    if (hashTable[value]) {
      firstDuplicateValue = value;
      break;
    }

    hashTable[value] = true;
  }

  return firstDuplicateValue;
}

// EXECUTION SCRIPT
const letters: string[] = ['a', 'b', 'c', 'd', 'c', 'e', 'f'];

console.log(findFirstDuplicate(letters));
