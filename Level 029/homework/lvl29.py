#1
#კოდი იწყება სიით [2, 4, 8, 9, 5]. ჯერ 3-ს ვამატებ ინდექსზე 1, რის შედეგადაც სია 
# ხდება [2, 3, 4, 8, 9, 5]. შემდეგ 9-ს ვშლი, და სია იქცევა [2, 3, 4, 8, 5]. 
# შემდეგ ვითვლი, რამდენჯერ არის 8 სიაში (1-ჯერ) და ამ რიცხვს ვამატებ ინდექსზე 0, რის შემდეგაც სია ხდება [1, 2, 3, 4, 8, 5]. 
# ბოლოს ვბეჭდავ ელემენტს ინდექსზე 3, რაც არის 4. ასე რომ, კოდის შედეგი არის 4.

#2
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print(fruits)

print(fruits[0])  
print(fruits[-1]) 

fruits.append("fig")

fruits.remove("banana")
fruits[1] = "blueberry"

print(len(fruits))

#3
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]

numbers.append(100)
numbers.insert(0, 5)
numbers.remove(30)
numbers.sort()
numbers.reverse()

index_50 = numbers.index(50)
count_20 = numbers.count(20)

print(numbers)
print(index_50)
print(count_20)

#4

numbers = list(range(1, 11))

first_half = numbers[:5]
second_half = numbers[5:]
squares = [num ** 2 for num in numbers]

print(first_half)
print(second_half)
print(squares)
