#1
number = list([])

input("Enter number :")

sum = 0 

for items in number :
    sum += items

print(sum)


#2
numbers = []  

input("Enter number :")  

sum = 0  

while True:
    user_input = input("Enter number or press Enter to stop: ")
    
    if user_input == "":
        break  
    
    numbers.append(int(user_input)) 

    sum += int(user_input)  

print("Total sum:", sum) 

