#1
# A = ["name", 500, 45, 345, 3545, 435, 35.4, "Zd", True, False]

# print(A[0])
# print(A[1])
# print(A[2])

# A[3] = "Python"
# A[4] = "JavaScript"
# A[5] = "Java"

# A += ["HTML", "CSS", "C++", "Ruby", "Go"]

# print(A)


#2
user_numbers = []

while True:
    num = input("შეიყვანეთ რიცხვი (ან Enter-ს დასასრულებლად): ")
    if num == "":
        break
    user_numbers.append(float(num))

if any(n > 10 for n in user_numbers):
    print("სიაში არის 10-ზე მეტი რიცხვი")
else:
    print("სიაში 10-ზე მეტი რიცხვი არ არის")

print("რიცხვების სია:", user_numbers)
print("სიის ჯამი:", sum(user_numbers))



