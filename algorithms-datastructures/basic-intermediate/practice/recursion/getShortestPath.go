// Function that takes a number of rows and columns
// Then finds the shortest path from the start to end of the rows stacked on each other
package main

import (
	"fmt"
)

func getShortestPath(rows int, cols int) int {
	fmt.Println(rows)
	fmt.Println(cols)
	// Base case: 1 for either args means you are calculating the first step
	if rows == 1 || cols == 1 {
		fmt.Println("returning")
		return 1
	}

	// Return the total of vertical and horizontal steps to get from first cell to the last
	return getShortestPath(rows - 1, cols) + getShortestPath(rows, cols - 1)
}

func main() {
	rows := 3
	columns := 7

	fmt.Println(getShortestPath(rows, columns))
}
