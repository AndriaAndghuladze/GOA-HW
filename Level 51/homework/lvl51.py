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

#You might know some pretty large perfect squares. But what about the NEXT one?
def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (int(root) + 1) ** 2
    return -1


#3

#Given the triangle of consecutive odd numbers:
def row_sum_odd_numbers(n):
    return n ** 3


#4

#In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
# How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
def nb_year(p0, percent, aug, p):
    years = 0
    while p0 < p:
        p0 += int(p0 * percent / 100) + aug
        years += 1
    return years

#5

#In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
def printer_error(s):
    err = 0
    
    for i in s:
        if i < 'a' or i > 'm':
            err += 1
    return f'{err}/{len(s)}'