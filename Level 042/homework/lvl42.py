#1

#Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. 
# The first parameter, employed, 
# is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
def set_alarm(employed, vacation):
    return employed and not vacation
    
#2

#You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"
    else:
        return "This is not a traffic light color."
    

#3

#Complete the function which returns the weekday according to the input number:
def whatday(num):
    if num == 1:
        return"Sunday"
    
    elif num == 2:
        return "Monday"
    
    elif num == 3:
        return "Tuesday"
    
    elif num == 4:
        return "Wednesday"
    
    elif num == 5:
        return "Thursday"
    
    elif num == 6:
        return "Friday"
    
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"