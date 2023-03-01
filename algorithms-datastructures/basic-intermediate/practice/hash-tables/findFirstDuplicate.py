# Function that finds the first duplicate in an array
# Funtion should execute in linear (O(N)) time using a hash table

def findFirstDuplicate(lettersArray):
  hashTable = {}
  firstDuplicateLetter = ""

  # Loop through the array and test if the current value is in the hash table
  for letter in lettersArray:
    # If the value is in the hash table, assign it to first duplicate and break
    if letter in hashTable:
      firstDuplicateLetter = letter
      break

    hashTable[letter] = True
  
  return firstDuplicateLetter


# EXECUTION SCRIPT
letters = ["a", "b", "c", "d", "c", "e", "f"]
print(findFirstDuplicate(letters))
