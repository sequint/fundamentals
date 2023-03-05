// Function that takes a string and finds the letter missing from the alphabet in the phrase
// Function executes in linear time using a hash table for the phrase
package main

import (
	"fmt"
)

// Hash generation function that generates an int hash from rune value passed
func generateHash(value rune, tableSize int) int {
	return int(value) % tableSize
}

func findMissingLetter(phrase string) rune {
	alphabet := [26]rune{
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
		'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	}
	hashTable := make([]bool, len(phrase)) // Slice of key/values the size of phrase
	missingLetter := 'a'

	// Create the hash table from the phrase
	for _, letter := range phrase {
		hash := generateHash(letter, len(hashTable))

		// Set value of true at the index of the phrase and value of hash letter as the key
		// Overwrite current value if collision happens
		hashTable[hash] = true
	}

	// Determine if the letter in the alphabet is found as a key in the hash table
	for _, letter := range alphabet {
		hash := generateHash(letter, len(hashTable))

		// If the hash is not included in the table, set the value of letter to missing letter
		if (!hashTable[hash]) {
			missingLetter = letter
			break
		}
	}

	return missingLetter
}

func main() {
	const phrase string = "the quick brown box jumps over a lazy dog"
	// Print the character representation of the missing rune (letter)
	fmt.Printf("%c", findMissingLetter(phrase))
}
