# # #1
import random

secret_number = random.randint(1, 10)

while True:
    guess = int(input("გამოიცანი რიცხვი 1-დან 10-მდე: "))


    if guess == secret_number:
        print("გილოცავ! გამოიცანი სწორი რიცხვი!")
        break
    else:
        print("არასწორია, სცადე კიდევ ერთხელ.")


# #2
x=100

while x > 0:
    print(x)
    x -=5


#3
secret_password = "group 55"
user_pass = " "


tries = 3

while tries > 0 and user_pass != secret_password:
    user_pass = input("enter password +  ( you have " + str(tries) + " tries left" )

    tries -=1

    if user_pass == secret_password:
       print("Accase grande") 

    elif tries == 0:
        print("you dont have any tries :(")  
    else:
        print("Access Denied, try again :)")