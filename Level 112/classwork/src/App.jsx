const h1 = React.createElement  (
    "h1",
    null,
    "hello world"
)

const h2 = React.createElement  (
    "h2",
    null,
    "hello"
)

const h3 = React.createElement  (
    "h3",
    null,
    "world"
)

// ------------------------------------

let list = ['apple', 'banana', 'orange']

let fruit = list.map((fruit, i) => i);


let list1 = ['mango', 'pinaple', 'mandarin']

let fruit1= list.map((fruit, i) => i);


let list2 = ['waterMElon', 'kiwi', 'ananas']

let fruit2 = list.map((fruit, i) => i);

// ------------------------------------

let fruits = ["apple", "banana", "orange"];

let fruitList = fruits.map((fruit, i) =>
  React.createElement("li", { key: i }, fruit)
);

