#1
Tbilisi = 540
air_avg = 60

hour = (Tbilisi / air_avg)

print(hour)

#2
pay = int(input("Pay money :"))
tip = int(input('Enter tip :'))
avg = pay * tip


print(avg)

#3
num1 = int(input("Enter Weight :"))
num2 = int(input("Enter Height"))
avg = num1 / num2

if avg > 18:
    print ("normal")
else:
    print("It's not normal")