// #1
let week = Number(prompt('Choise number 1 to 7'));

switch(week){
    case 1:
        console.log('ორშაბათი')
    break;

    case 2:
        console.log('სამშაბათი')
    break;

    case 3:
        console.log('ოთხშაბათი')
    break;

    case 4:
        console.log('ხუთშაბათი')
    break;

    case 5:
        console.log('პარასკევი')
    break;

    case 6:
        console.log('შაბათი')
    break;

    case 7:
        console.log('კვირა')
    break;

    default:
        console.log( "არასწორი დღე")
}


// #2
let num = Number(prompt('enter num'))

let number = (num % 2) ? 'კენტი' : 'ლუწი' ;
console.log(number)


// #3
let weather = Number(prompt('Choise number 1 to 4'));

switch(weather){
    case 1:
        console.log('მზიანი')
    break;

    case 2:
        console.log('წვიმიანი')
    break;

    case 3:
        console.log('მოღრუბლული')
    break;

    case 4:
        console.log('ქარიანი')
    break;

    default:
        console.log("არ არის დადგენილი")
}


// #4
let monthNumber = Number(prompt("Choise num (1-12):"));
let monthName;
let halfOfYear;


switch (monthNumber) {
    case 1:
        monthName = "იანვარი";
        break;
    case 2:
        monthName = "თებერვალი";
        break;
    case 3:
        monthName = "მარტი";
        break;
    case 4:
        monthName = "აპრილი";
        break;
    case 5:
        monthName = "მაისი";
        break;
    case 6:
        monthName = "ივნისი";
        break;
    case 7:
        monthName = "ივლისი";
        break;
    case 8:
        monthName = "აგვისტო";
        break;
    case 9:
        monthName = "სექტემბერი";
        break;
    case 10:
        monthName = "ოქტომბერი";
        break;
    case 11:
        monthName = "ნოემბერი";
        break;
    case 12:
        monthName = "დეკემბერი";
        break;
    default:
        monthName = "არასწორი თვის ნომერი";
}


halfOfYear = (monthNumber >= 1 && monthNumber <= 12) ? 
    (monthNumber <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი") : "უცნობი";


console.log(`თვე: ${monthName}`);
console.log(`წლის ნახევარი: ${halfOfYear}`);