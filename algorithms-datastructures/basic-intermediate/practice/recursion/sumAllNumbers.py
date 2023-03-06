# Function that uses recursion to return the sum of all numbers between a low and high number

def sumAllNumbers(low, high):
  # Base case
  if high == low:
      return low
  # Return high value plus the sum of all numbers up to but not including highest value
  return high + sumAllNumbers(low, high - 1)

# Execution script
print(sumAllNumbers(1, 10))
