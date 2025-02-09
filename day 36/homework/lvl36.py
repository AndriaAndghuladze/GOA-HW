#1

#Complete the solution so that it reverses the string passed into it.
def solution(string):
    return string[::-1]

#2

#A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
def main(verb, noun):
    return verb + noun

#3

#You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
#If it is a square, return its area. If it is a rectangle, return its perimeter.
def area_or_perimeter(l, w):
    if l == w:
        return l * w  
    else:
        return 2 * (l + w)
    
#4

#In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
def make_negative( number ):
    return -abs(number)

#5

#Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
def opposite(number): 
    return -number