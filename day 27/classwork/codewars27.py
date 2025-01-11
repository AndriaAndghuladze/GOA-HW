#1

#This code does not execute properly. Try to figure out why.
def multiply(a, b):
    return a * b


#2

#This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
def simple_multiplication(number):
    
    if number % 2 == 0:  
        return number * 8
    else:  
        return number * 9
    

#3

#Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
def get_grade(s1, s2, s3):
    average_score = (s1 + s2 + s3) / 3  
    if average_score >= 90:
        return "A"
    elif average_score >= 80:
        return "B"
    elif average_score >= 70:
        return "C"
    elif average_score >= 60:
        return "D"
    else :
        return "F"
    