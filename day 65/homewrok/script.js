//#1
let book = {
    autor: {
        first: 'შოთა რუსთაველი',
        second: 'აკაკი წერეთელი',
        third:'ვაჟა ფშაველა',

        header:{
            header1:'ვეფხისტყაოსანი',
            header2:'კაცია ადამიანი',
            header3:'ხატის წინ',

            year:{
                year1:'1200',
                year2:'1903',
                year3:'1904',

                price:{
                    price1:'200',
                    price2:'30',
                    price3:'30',
                }
            }
        }
    }
}

console.log(book.autor.first);
console.log(book.autor.header.header1);
console.log(book.autor.header.year.year1);
console.log(book.autor.header.year.price.price1);

console.log(book['autor']['second']);
console.log(book['autor']['header']['header2']);
console.log(book['autor']['header']['year']['year2']);
console.log(book['autor']['header']['year']['price']['price2']);

let Sentence = `პირველი წიგნია "${book.autor.header.header1}", ავტორი: ${book.autor.first}, გამოიცა ${book.autor.header.year.year1} წელს და ღირს ${book.autor.header.year.price.price1} ლარი. 
მეორე წიგნია "${book.autor.header.header2}", ავტორი: ${book.autor.second}, გამოიცა ${book.autor.header.year.year2} წელს და ღირს ${book.autor.header.year.price.price2} ლარი. 
მესამე წიგნია "${book.autor.header.header3}", ავტორი: ${book.autor.third}, გამოიცა ${book.autor.header.year.year3} წელს და ღირს ${book.autor.header.year.price.price3} ლარი.`;

console.log(Sentence);


//#2
let student = {
    name: 'ანდრია ანდღულაძე',
    age: 14,
    faculty: 'ინფორმატიკა',
    course: 1,
    averageGrade: 9.5
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.faculty);
console.log(student.course);
console.log(student.averageGrade);

console.log(student['name']);
console.log(student['age']);
console.log(student['faculty']);
console.log(student['course']);
console.log(student['averageGrade']);

let sentence = `სტუდენტის სახელი არის ${student.name}, ის არის ${student.age} წლის, სწავლობს ${student.faculty}-ის ფაკულტეტზე, არის ${student.course} კურსზე და მისი საშუალო ქულაა ${student.averageGrade}.`;

console.log(sentence);