def leapYear ():
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                print ('True')


            else:
                print('False')
    
        else:
            print('False')

    else:
        print('False')

year = int(input('Enter Year:'))

if leapYear(year):
    print (f"{year} is leap year")

else:
     print(f"{year} is not a leap year.")

