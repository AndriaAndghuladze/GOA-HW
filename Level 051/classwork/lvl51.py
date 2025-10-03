#1

#The Western Suburbs Croquet Club has two categories of membership, 
# Senior and Open. They would like your help with an application 
# form that will tell prospective members which category they will be placed.
#  To be a senior, a member must be at  least 55 years old and have a handicap greater than 7.
#  In this croquet club, handicaps range from -2 to +26;the better the player the lower the handicap.
def open_or_senior(data):
    l = []
    for i in data:
        if i[0] >= 55 and i[1] > 7:
            l.append("Senior")
        else:
            l.append("Open")
    return l

#2

#In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
def printer_error(s):
    err = 0
    
    for i in s:
        if i < 'a' or i > 'm':
            err += 1
    return f'{err}/{len(s)}'