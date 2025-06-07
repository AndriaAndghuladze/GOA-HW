//1
let university = {
    name: "GOA",
    departments: 5,
    website: "https://goa.com",
    ratings: [
        { name: "Student1", score: 4.5 },
        { name: "Student2", score: 4.8 },
        { name: "Student3", score: 4.2 }
    ]
};


let listOfUniver = Object.values(university)
console.log(listOfUniver)

console.log("scholarship" in university);


Object.freeze(updatedUniversity);


updatedUniversity.name = "New GOA";
updatedUniversity.studentsCount = 1000;


console.log("Is frozen:", Object.isFrozen(updatedUniversity));
console.log("Updated object:", updatedUniversity);



//2
let sportsClub = {
    clubName: "GOA Warriors",
    sportType: "eSports",
    foundedYear: 2020,
    achievements: [
        { title: "GOA Championship", year: 2021 },
        { title: "National Cup", year: 2022 },
        { title: "Global eLeague", year: 2023 }
    ]
}

console.log(Object.keys(sportsClub))
console.log(Object.values(sportsClub))
console.log("sponsors" in sportsClub)

let updatedClub = {
    ...sportsClub,
    stadiumCapacity: 15000
}

Object.freeze(updatedClub)

updatedClub.clubName = "New Warriors"
updatedClub.stadiumCapacity = 20000

console.log(updatedClub.clubName)
console.log(updatedClub.stadiumCapacity)
console.log(Object.isFrozen(updatedClub))


//3
let hotel = {
    hotelName: "Sunset Palace",
    stars: 5,
    location: "Tbilisi",
    guestReviews: [
        { name: "Nika", rating: 4.8 },
        { name: "Lika", rating: 5.0 },
        { name: "Giorgi", rating: 4.5 }
    ]
}

for (let key in hotel) {
    console.log(key, hotel[key])
}

console.log("spa" in hotel)

let updatedHotel = {
    roomsCount: 120
}

Object.freeze(updatedHotel)

updatedHotel.hotelName = "Mountain View"
updatedHotel.roomsCount = 200

console.log(updatedHotel.hotelName)
console.log(updatedHotel.roomsCount)
console.log(Object.isFrozen(updatedHotel))


//4
let cinema = {
    cinemaName: "Cinema",
    moviesCount: 12,
    location: "Batumi",
    movieReviews: [
        { user: "Anna", rating: 4.7 },
        { user: "Dato", rating: 4.9 },
        { user: "Maka", rating: 4.5 }
    ]
}



console.log("vipSeats" in cinema)

let updatedCinema = {
    ticketPrice: 15
}

Object.freeze(updatedCinema)

updatedCinema.cinemaName = "Mega Cinema"
updatedCinema.ticketPrice = 20

console.log(updatedCinema.cinemaName)
console.log(updatedCinema.ticketPrice)
console.log(Object.isFrozen(updatedCinema))