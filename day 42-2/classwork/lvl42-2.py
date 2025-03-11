#1

#Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
def replace_exclamation(st):
    res = ""
    for i in st:
        if i not in "aeiouAEIOU":
            res += i
        else:
            res += "!"
    return res
                

#2

#Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.If the input is an empty array or is null, return an empty array.
