//1
let MixedArr = [10, 'apple', 5, 'banana', 20, 'cherry']

let FirsStr = MixedArr.find(item => typeof item === 'string')
console.log('firsstr', FirsStr)

let fruits = ['mango', 'orange']
let fruitArr = Array.isArray(fruits)
console.log(fruitArr)

let strLength = Array.from(MixedArr.filter(item => typeof item ==='string'), str => str.length)
console.log(strLength)

let revers = [...MixedArr].reverse()
console.log(revers)

let sortNum = MixedArr.filter(item => typeof item === 'number').sort((a, b) => a-b)
console.log(sortNum)