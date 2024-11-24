#1
sum_of_even_numbers = 0  
count_of_even_numbers = 0  
number = 1  


while number <= 100:
    if number % 2 == 0:  
        sum_of_even_numbers += number  
        count_of_even_numbers += 1 
    number += 1  


average = sum_of_even_numbers / count_of_even_numbers

#2
num = float(input("შეიყვანეთ რიცხვი"))

if num > 0:
    print("ეს რიცხვი დადებითია")

elif num < 0:
    print("ეს რიცხვი უარყოფითია")

else:
    print("ეს რიცხვი 0 ტოლია")

#3
year = int(input("შეიყვანეთ წელი: "))


if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} წელი ნაკიანია.")
else:
    print(f"{year} წელი არ არის ნაკიანი.")

#4
score = int(input("enter your grade: "))


if score > 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print("your grade:", grade)




