#1

# Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
def bool_to_word(boolean):
    if boolean:
        return "Yes"
    else:
        return "No"
    
#2

#Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
def grow(x):
    res = 1
    for num in x:
        res *= num
    return res

