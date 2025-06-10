#1

#Write a function that will check if two given characters are the same case.If either of the characters is not a letter, return -1If both characters are the same case, return 1If both characters are letters, but not the same case, return 0
def same_case(a, b): 
    if a.islower() and b.islower():
        return 1
    if a.isupper() and b.isupper():
        return 1
    if not a.islower() and not b.islower():
        return -1
    if not a.isupper() and not b.isupper():
        return -1    
    return 0

#2

#Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.If the input is an empty array or is null, return an empty array.
def count_positives_sum_negatives(arr):
    
    if arr == [] : 
        return []
    
    result = [0, 0]
    
    for value in arr:
        if value > 0:
            result[0] += 1
        else:
            result[1] += value
        
    return result

#3

#In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.It is guaranteed that n > 0 and limit >= n.For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
    let result = [];
    
    for (let i = integer; i <= limit; i += integer) {
        result.push(i);
    }
    
    return result;
}
