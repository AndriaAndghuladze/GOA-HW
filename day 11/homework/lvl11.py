#1
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

#2
age = int(input("შეიყვანეთ თქვენი ასაკი: "))


if age < 13:
    category = "მცირეწლოვანი"
elif age <= 19:
    category = "მოზარდი"
else:
    category = "ზრდასრული"


print("თქვენ ხართ:", category)

#3
number = float(input("შეიყვანეთ რიცხვი: "))


if number == 0:
    result = "ნულია"
elif number > 0:
    result = "დადებითი რიცხვია"
else:
    result = "უარყოფითი რიცხვია"


print("შედეგი:", result)


#4
price = float(input("შეიყვანეთ პროდუქტის ფასი: "))

if price > 50:
    discount = price * 0.10
    final_price = price - discount
elif price >= 20:
    discount = price * 0.05
    final_price = price - discount
else:
    discount = 0
    final_price = price

print("ფასდაკლება:", discount)
print("საბოლოო ფასი:", final_price)