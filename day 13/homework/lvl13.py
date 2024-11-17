# #1
import random

secret_number = random.randint(1, 10)

while True:
    guess = int(input("გამოიცანი რიცხვი 1-დან 10-მდე: "))


    if guess == secret_number:
        print("გილოცავ! გამოიცანი სწორი რიცხვი!")
        break
    else:
        print("არასწორია, სცადე კიდევ ერთხელ.")


#2
x=100

while x > 0:
    print(x)
    x -=5


#3
while input("შეიყვანეთ პაროლი: ") != "group55":
    print("არასწორი პაროლი, სცადეთ ისევ.")
    
print("პაროლი სწორია! კეთილი იყოს თქვენი მობრძანება.")
