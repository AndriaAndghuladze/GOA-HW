//1
const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];

const nebulaBackup = [...nebulaStock]

const nebulaStockUp = [nebulaStock, ...'gravity lens']

const celestialDrops = [...'meteor|comet|nova'.split('|')];

const fullInventory = [...nebulaStockUp, ...asteroidStock, ...celestialDrops];

console.log(nebulaBackup)
console.log(nebulaStockUp)
console.log(celestialDrops)
console.log(fullInventory)


//2

// spread ოპერატორი rest ოპერატორისგან იმით განსხვავდება, რომ spread ოპერატორი ობიექტებს და მასივების დასაშლელად, ხოლო 
// rest-ი გასაერთიანებლად