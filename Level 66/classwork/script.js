//#1
function Flight(id, time, lend) {
    this.id = id;
    this.time = time;
    this.lend = lend;
}

let flight1 = new Flight('1', '14:30', 'Paris');

console.log(flight1);


//#2
function Product(product, price) {
    this.product = product;
    this.price = price;
    this.newPrice = price;

    this.changePrice = function(discount) {
        this.newPrice = this.price - (this.price * (discount / 100));
    };
}

let product = new Product("bread", 1400);

console.log(product.product + " price: " + product.price);

product.changePrice(15);

console.log(product.product + " new price: " + product.newPrice);