# Function that takes a list holding numbers and lists of numbers and returns all numbers
# Uses recursion to get all numbers of sub-lists

def printAllNumbers(numbers):
    for value in numbers:
        # If the value length is and list, recursively call the function
        if isinstance(value, list):
            printAllNumbers(value)
        else:
            print(value)

# Execution script
numbers = [ 1,
            2,
            3,
            [4, 5, 6],
            7,
            [8,
             [9, 10, 11,
              [12, 13, 14]
             ]
            ],
            [15, 16, 17, 18, 19,
             [20, 21, 22,
              [23, 24, 25,
               [26, 27, 29]
              ], 30, 31
             ], 32
            ], 33
          ]
printAllNumbers(numbers)
