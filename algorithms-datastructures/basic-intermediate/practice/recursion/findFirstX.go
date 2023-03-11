// Function that uses recursion to find the index of the first 'x' in an unsorted string
package main

import (
	"fmt"
)

func findFirstX(letters string) int {
	// Base case: if the value of the first index passed is x
	if (letters[0] == 'x') {
		return 1
	}

	// Return 1, plus the amount of times the function has been recursivly passed back
	// This number will equal the index that x is in the string
	return 1 + findFirstX(letters[1:])
}

func main() {
	letters := "abcdefghijklmnopqrstuvwxyz"
	fmt.Println(findFirstX(letters))
}
