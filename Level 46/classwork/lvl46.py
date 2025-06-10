#1

#In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
def repeats(arr):
    counts = {}
    for num in arr:
        counts[num] = counts.get(num, 0) + 1 
    singles_sum = 0
    for num, count in counts.items():
        if count == 1:  
            singles_sum += num

    return singles_sum

#2

#Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
def litres(time):
    liters = 0.5
    return int(time * liters)

#3

#You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.
def cat_mouse(x):
    
    esc = {}
    
    for esc in x:
        if x.count (".") >3:
            return "Escaped!"
        else:
            return "Caught!"