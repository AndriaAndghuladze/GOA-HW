#1
list = [8, 4, 2, 6]
list.remove(2)
print(len(list) + list.count(6))

#answer = 4 
#ჯერ ვქმნით ლისთ შემდეგ შლით ერთ-ერთ ინდექს და ვუმატებთ სადაც საბოლოო პასუხი 4 ია

#2
nums = [2,4,8,9,5]

nums.insert(1, 3)

nums.remove(9)

nums.insert(0, nums.count(8))

print(nums[3])

#answer = 4
#დაემატა "3" მეორე ადგილას , მოცილდა "9" სიიდან, დაემატა "8"-ის რაოდენობა სიაში დასაწყისში,დაბეჭდა მეოთხე ელემენტი

#3
queue = ['John', 'Amy', 'Bob', 'Adam']
new_person = input("Enter the name to add to the queue: ")
queue.append(new_person)
print(queue)

#queue - სია, სადაც არიან რიგის მონაწილეები.
# input - მომხმარებელი შეყავს ახალი სახელი.
# append - ამატებს ახალ სახელს სიის ბოლოს.
# print - ბეჭდავს განახლებულ სიას.