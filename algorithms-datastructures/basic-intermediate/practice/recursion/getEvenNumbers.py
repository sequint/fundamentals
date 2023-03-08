# Function that takes a list of numbers and returns only the even numbers in the list

def getEvenNumbers(numbers):
    # Base case: if length of numbers is 0 return an empty array
    if len(numbers) == 0:
        return []
    
    # If the first index is even, return the number appended to the
    # even number list for the rest of numbers
    if (numbers[0] % 2 == 0):
        return [numbers[0]] + getEvenNumbers(numbers[1:len(numbers)])
    
    # Otherwise return the even numbers
    return getEvenNumbers(numbers[1:len(numbers)])

# Execution script
numbers = [1, 2, 3, 4, 5, 6]
print(getEvenNumbers(numbers))
