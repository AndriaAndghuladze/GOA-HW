#1
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(fruits)
print(fruits[0])
print(fruits[-1])
fruits.append("fig")
fruits.remove("banana")
fruits[1] = "blueberry"
print(len(fruits))

#2
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
numbers.append(100)
numbers.insert(0, 5)
numbers.remove(30)
numbers.reverse()
print(numbers.index(50))
print(numbers.count(20))

#3
numbers = list(range(1, 11))
first_half = numbers[:5]
second_half = numbers[5:]
squares = [x**2 for x in numbers]
print(first_half)
print(second_half)
print(squares)

#4
temps = [72, 68, 75, 70, 78, 74, 71]
print(max(temps))
print(min(temps))
print(sum(temps) / len(temps))
print([t for t in temps if t > 70])