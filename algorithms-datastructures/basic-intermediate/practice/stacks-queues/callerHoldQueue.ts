// Function that mimics call hold queue

class Queue {
  private data: string[] = []

  public size: number = 0;

  constructor() {}

  // Adds a passed value to the end of the queue data array
  enqueue(value: string): void {
    this.size++
    this.data.push(value)
  }

  // Removes and returns the first value of the data array
  dequeue() {
    this.size--
    return this.data.shift()
  }
}

// Queue execution 
  const callerQueue: Queue = new Queue()
  const firstCaller: string = 'Debra'
  const secondCaller: string = 'Jason'
  const thirdCaller: string = 'Joy'

  // Add the callers to the queue
  callerQueue.enqueue(firstCaller)
  callerQueue.enqueue(secondCaller)
  callerQueue.enqueue(thirdCaller)

  // While the queue has callers in it, dequeue each caller (take the calls)
  // Print the callers as the calls are taken
  while (callerQueue.size > 0) {
    console.log(callerQueue.dequeue())
  }
