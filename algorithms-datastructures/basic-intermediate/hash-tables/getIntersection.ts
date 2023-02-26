// Returns an array of intersections of two arrays with time complexity O(N)

const getIntersections = (array1: number[], array2: number[]): number[] => {
  let largerArray: number[] = [];
  let smallerArray: number[] = [];
  let intersectionHashTable: any = {};
  let intersectedNumbers: number[] = [];

  // Get the larger array to use as the hash table
  if (array1.length >= array2.length) {
    largerArray = array1;
    smallerArray = array2;
  } else {
    largerArray = array2;
    smallerArray = array1;
  }

  // Generate the hash table from the larger array
  // Use the number as the key and a true bool as the value
  for (const number of largerArray) {
    intersectionHashTable[number] = true;
  }

  // Loop through the smaller array to see if each number is a true value in the hash table
  // If so, push the number into the intersected array
  for (const number of smallerArray) {
    if (intersectionHashTable[number]) {
      intersectedNumbers.push(number);
    }
  }

  return intersectedNumbers;
}

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [0, 2, 4, 6, 8];

console.log(getIntersections(array1, array2));
