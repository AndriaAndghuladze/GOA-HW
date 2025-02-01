#1
name = input('enter name :')
age = input('enter age :')
print(f'Hello, {name}! You are {age} years old.'.format(name,age))

#2
list = ["Python", "is","Fun"]
res = " ".join(list)
print(res)

#3
sentence = input("Enter sentece :")
print(sentence.split())

#4
txt = input("Enter sentence :")
txt2 = input("Enter word to replace:")

sentence = txt.replace(txt2)
print(sentence)

#5
sentence = "helLo WorD MY NaMe iS AnDria"
print(sentence.lower())

#6
sentence = "helLo WorD MY NaMe iS AnDria"
print(sentence.upper())
