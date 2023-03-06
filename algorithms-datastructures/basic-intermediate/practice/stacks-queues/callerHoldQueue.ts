// Function that mimics call hold queue

class Queue {
  private data: string[] = []

  constructor() {}

  // Adds a passed value to the beginning of the queue data array
  enqueue(value: string): void {
    this.data.unshift(value)
  }

  // Removes and returns the first value of the data array
  dequeue() {
    return this.data.shift()
  }
}
