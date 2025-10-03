#1
list = input("Enter num:")
print(list)

#2
numbers = list(map(int, input("შეიყვანეთ რიცხვები: ").split()))
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print("მაქსიმალური რიცხვი:", max_num)

#3
numbers = list(map(int, input("შეიყვანეთ რიცხვები: ")))
to_remove = int(input("რომელი რიცხვი წავშალოთ? "))
numbers = [num for num in numbers if num != to_remove]
print("განახლებული სია:", numbers)

#4
numbers = list(map(int, input("შეიყვანეთ რიცხვები: ").split()))
reversed_numbers = numbers[::-1]
print("სიის საპირისპირო მიმდევრობით:", reversed_numbers)

#5
numbers = list(map(int, input("შეიყვანეთ რიცხვები: ").split()))
to_find = int(input("რომელი რიცხვი მოვძებნოთ? "))
if to_find in numbers:
    print("რიცხვი არის სიაში.")
else:
    print("რიცხვი არ არის სიაში.")