#1
name = 'Alice'
place = 'Wonderland'

formated_string ="Hello, {0}. Welcome to {1}.".format (name, place)

print(formated_string)

#2
list = ["apple", "banana", "cherry"]

txt = " ".join(list)

print(txt)

#3
name = "The quick brown fox jumps over the lazy dog."

words_list = name.split(" ")

print(words_list)

#4
mixed_case =  "PyThOn Is AwEsOmE!"
lowercase_string = mixed_case.lower()

print(lowercase_string)

#5
greeting =  "good morning"
uppercase_greeting  = greeting.upper()

print(uppercase_greeting )
