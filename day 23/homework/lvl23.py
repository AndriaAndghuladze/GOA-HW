#1
def my_info():
    first_name = "Andria"
    last_name = "Andghuladze"
    age = 13
    country = "Georgia"
    city = "Tbilisi"
    favorite_hobby = "Coding and Swimming"
    
    print("Name:", first_name)
    print("Last Name:", last_name)
    print("Age:", age)
    print("Country:", country)
    print("City:", city)
    print("Favorite Hobby:", favorite_hobby)


my_info()

#2
def simple_calculator(num1, num2, operation):
    if operation == "დამატება":
        return num1 + num2
    elif operation == "გამოკლება":
        return num1 - num2
    elif operation == "გამრავლება":
        return num1 * num2
    elif operation == "გაყოფა":
        if num2 == 0:
            return "შეცდომა: ნულზე გაყოფა შეუძლებელია"
        return num1 / num2
    else:
        return "შეცდომა: არასწორი ოპერაცია"


print(simple_calculator(10, 5, "დამატება"))       
print(simple_calculator(10, 5, "გამოკლება"))       
print(simple_calculator(10, 5, "გამრავლება"))      
print(simple_calculator(10, 0, "გაყოფა"))          
print(simple_calculator(10, 5, "გაყოფა"))          
print(simple_calculator(10, 5, "არასწორი"))  