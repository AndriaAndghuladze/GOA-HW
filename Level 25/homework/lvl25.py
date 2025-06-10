import random

def guess_number_game():
    low = 1
    high = 100
    attempts = 3

    for i in range(attempts):
        guess = random.randint(low, high)
        print(f"[{i + 1}/{attempts}] ჩემი გამოცნობა: {guess}")
        
        response = input("თუ მაღალია, დაწერე 'მაღალი'; თუ დაბალია, დაწერე 'დაბალი'; თუ სწორია, დაწერე 'სწორია': ").strip().lower()

        if response == "სწორია":
            print("გილოცავ! მე გამოვიცანი შენი რიცხვი!")
            break
        elif response == "მაღალი":
            high = guess - 1
        elif response == "დაბალი":
            low = guess + 1
        else:
            continue

        if low > high:
            break
    else:
        print("სამწუხაროდ, მე ვერ გამოვიცანი შენი რიცხვი ამ მცდელობებით.")

guess_number_game()
