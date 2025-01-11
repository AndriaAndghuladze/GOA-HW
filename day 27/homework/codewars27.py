#1

#This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
a = "code"
b = "wa.rs"
name = a + b
print(name)


#2

#In this Kata we are passing a number (n) into a function.Your code will determine if the number passed is even (or not)
#The function needs to return either a true or falseNumbers may be positive or negative, integers or floats.
#Floats with decimal part non equal to zero are considered UNeven for this kata.
def is_even(n): 
    
    if n % 2 == 0:
        return True
    else:
        return False
    

#3

#A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
def main(verb, noun):
    return verb + noun


#4

#Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
def even_or_odd(number):
    if number % 2 == 0 :
        return "Even"

    else:
        return "Odd"
    

#5

#We need a function that can transform a number (integer) into a string.What ways of achieving this do you know?
def number_to_string(num):
    return str(num)

#6

#Implement a function which convert the given boolean value into its string representation.Note: Only valid inputs will be given.
def boolean_to_string(b):
    return str(b)

#7

#The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
def say_hello(name):
    return f'Hello, {name}'


#8

#Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
def quarter_of(month):
    
    if 1 <= month <= 3:
        return 1
    elif 4 <= month <= 6:
        return 2
    elif 7 <= month <= 9:
        return 3
    else:
        return 4