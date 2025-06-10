#1
losangeles = 7425
air_avg = 550

hour = (losangeles / air_avg)

print(hour)

#2

mon = int(input("Pay money :"))
tip = mon * 0.2

print(tip)

#3
wheit = float(input("Enter wheit :"))
height = float(input("Enter height :"))
BMI = wheit / (height **2)

if BMI < 18.5:
    print("Underweight")

elif BMI < 18.5 > 25:
    print("Normal")

elif BMI > 25 < 30:
    print("Overweight")
else:
    print("Obesity")

#4
text = input("Enter txt :")
word = input("Enter word :")

def search (text, word):
    if word in text:
        print("word found")
    else:
        print("word not found")
search()