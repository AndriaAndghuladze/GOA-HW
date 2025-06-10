#1
msg = input()
print(msg.replace("#"," "))

# #2
name = "Andria"
age = 14
print(f'Hello, {name}! You are {age} years old.'.format(name,age))

# #3
list = ["Python", "is","Fun"]
res = " ".join(list)
print(res)

# #4
sentence = input("Enter sentece :")
print(sentence.split())

#5
txt = input("Enter sentence :")
txt2 = input("Enter word to replace:")

sentence = txt.replace(txt2)
print(sentence)
