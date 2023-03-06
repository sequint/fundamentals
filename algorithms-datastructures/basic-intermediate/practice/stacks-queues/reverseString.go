// Function that uses Stack data structure to reverse a string input
package main

import (
	"fmt"
)

//********Stack struct definition and methods********//
type Stack struct {
	data []rune
}

func (stack *Stack) add(character rune) {
	stack.data = append(stack.data, character)
}

func (stack *Stack) removeTop() rune {
	// Get the length of the current stack data
	dataLength := len(stack.data)

	// Set variable for last character in the data slice
	lastChar := stack.data[dataLength - 1]

	// Remove the last character from the data slice
	stack.data = stack.data[:dataLength - 1]

	// Return the removed last character
	return lastChar
}
//**************************************************//

func reverseString(str string) []rune {
	var stack Stack
	var reverseStr []rune

	// Loop through the string and add each character to the stack
	for _, char := range str {
		stack.add(char)
	}
	fmt.Println(stack)

	// Iterate through all characters in the stack
	// Remove each from the top and place into the reverse string
	// for len(stack.data) != 0 {}
	
	return reverseStr
}

func main() {
	// Define string
	str := "hello"
	// Call reverString
	reverseString(str)
}
