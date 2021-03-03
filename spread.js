let A = [1,2,3,4,5]
let B = [...A]
let C = [6,7,8]

B[1] = 10
console.log("A = "+A)

console.log()

console.log("B = "+B)

console.log()

console.log("Concatenating A ,C using spread operator = " , ...A ,...C,9,10)