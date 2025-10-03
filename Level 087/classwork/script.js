//1
//There is a bus moving in the city which takes and drops some people at each bus stop.

var number = function(busStops){
  let total = 0
  
  for (let i = 0; i < busStops.length; i++){
    total += busStops[i][0] - busStops[i][1]
  }
  return total
}


//2
//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

function stray(numbers) {
  return numbers.find(num => numbers.filter(x => x === num).length ===1)
}