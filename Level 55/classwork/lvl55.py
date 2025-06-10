#1

#You will be given an array and a limit value. You must check that all values 
# in the array are below or equal to the limit value. If they are, return true. Else, return false.
def small_enough(array, limit):
    
    
    for num in array:
        if num > limit:
            return False
        
    else:
        return True
    

#2

#Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
#For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
def sum_two_smallest_numbers(num):
    
    num.sort()
    return num[0] + num[1]


#3

#Given an integral number, determine if it's a square number:
def is_square(n):    
     
    if n < 0:
        return False
    
    else:
        return int(n ** 0.5) ** 2 == n
    

#4

#Your job is to write a simple password validation function, as seen on many websites.
if len(st) < 8:
    return False

elif not any(c.isupper() for c in st):
    return False

elif not any(c.islower() for c in st):
    return False

elif not any(c.isdigit() for c in st):
    return False

else:
    return True