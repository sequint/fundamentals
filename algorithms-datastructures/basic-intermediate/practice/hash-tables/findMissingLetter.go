// Function that takes a string and finds the letter missing from the alphabet in the phrase
// Function executes in linear time using a hash table for the phrase
package main

import (
	"fmt"
)

func main() {
	const phrase string = "the quick brown box jumps over a lazy dog"
	alphabet := [26]string{
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
		"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	}
	hashTable := [len(phrase)]bool{} // Array that will hold table of hashed strings (chars)

	// Create the hash table from the phrase
	for letter := range phrase {
		hashTable[letter] = true
	}

	fmt.Println(alphabet)
	fmt.Println(hashTable)
}
