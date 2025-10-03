//1
const baseIngredients = ['water', 'herb', 'crystal'];

const baseIngredients1 = [...baseIngredients]

const baseIngredients2 = [ 'phoenix feather', ...baseIngredients]

const finalPotion = enhancedPotion.concat(['moon dust', 'sun ray']);

console.log(finalPotion);


//2
const dna = 'A|T|G|C|A|G';

let arr = [...dna, 'x', ...dna]

console.log(arr)


//3
const baseStats = { defense: 40, durability: 80 };
const enchantment = { durability: 100, magicResist: 25 };

let  finalStats = [...baseStats, ...enchantment]

console.log(finalStats)


//4
const thoughts = ['idea1', 'idea2', 'idea3', 'idea4'];

const [first, second, ...remainingThoughts] = thoughts;

onsole.log(first);             
console.log(second);            
console.log(remainingThoughts); 


//5
const base = ['core', 'shell'];

const newArray = [...base, 'reactor'];

console.log(newArray);