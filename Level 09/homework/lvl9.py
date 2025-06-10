#1
num1 = "zdarova"
num2 = 100
num3 = 99,9

print(type(num1))
print(type(num2))
print(type(num3))

#2
print(10 > 5)
print(20 < 30)
print(20 <= 20)
print(30 >= 20)
print(100 == 100)
print(20 != 10)


#3
a = 5
b = 10
c = 15

print(a < b and b < c)

a = 8
b = 3
c = 10

print(a < b and b < c)

x = 7
y = 4

print(x > 5 or y > 5)

x = 2
y = 1

print(x > 5 or y > 5)

a = 10
b = 20
c = 5

print((a > c and b > c) or (a < b and b == c))


#4
age = input("Enter your age: ")

print(type(int(age)))

age = input("Enter your age: ")

print(type(float(age)))