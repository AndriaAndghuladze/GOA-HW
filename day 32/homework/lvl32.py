#1

#Complete the function that takes two integers (a, b, where a < b) and return an array of all integers 
# between the input parameters, including them.
def between(a,b):
    list = []
    for i in range(a,b+1):
        list += [i]
    return list

#2

#Complete the solution so that it reverses the string passed into it.
def solution(string):
    return string[::-1]

#3

#Implement a function which convert the given boolean value into its string representation.
def boolean_to_string(b):
    return str(b)

#4

#Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
def create_array(n):
    res=[]
    i=1
    while i<=n:
        res+=[i]
        i+= 1
    return res

#5

#Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
def quarter_of(month):
    
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    else:
        return 4
