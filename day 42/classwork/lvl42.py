#1

#Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. 
# If this one is an alligator (case-insensitive) return small otherwise return wide.
def mouth_size(animal): 
    
    if animal== "alligator":
        return "small"
    else:
        return "wide"
    
#2

#Clock shows h hours, m minutes and s seconds after midnight.
#Your task is to write a function which returns the time since midnight in milliseconds.
def past(h, m, s):
     
    past = h * 3600000 + m * 60000 + s * 1000
    
    return past

#3

#