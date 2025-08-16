//1
let product = [
    {name: 'laptop', price: 3000},
    {name: 'Mouse', price: 30},
    {name: 'PC', price: 4000},
    {name: 'monitor', price: 700},
    {name: 'KeyBoard', price: 300},
];

let ProductName = product.map(products => products.name)
console.log('NAme', ProductName)

let affordableProducts = product.filter(products => products.price < 100)
console.log('affordableProducts', affordableProducts)

let Sum = product.reduce((x, products) => x + products.price, 0)
console.log('sum',sum)

let Right = product.reduceRight((x, products, index) => {
    console.log(acc + '-' + products.name + product.name)
})
console.log(Right)