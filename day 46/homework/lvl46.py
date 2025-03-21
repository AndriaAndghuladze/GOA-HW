#1

#Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
def solution(text, ending):
     return text.endswith(ending)

#2

#Your task is to create a function that does four basic mathematical operations.
def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    elif operator == "/":
        return value1 / value2 
    else:
        return None


#3

#Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
def digitize(n):
    result = []
    while n >= 1:
        result.append(n%10)
        n //= 10
    return result

#4

#The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
def century(year):

    return (year + 99) // 100

#5

#Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.You get given the time in hours and you need to return the number of litres Nathan will drink, rounded
def litres(time):
    liters = 0.5
    return int(time * liters)