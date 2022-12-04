// QUESTION 1: GET THE RESULT
// let cat = Object.create({type:"lion"})
// cat.size = "large"
// let copyCat = {...cat}
// cat.type = "tiger"
// console.log(copyCat.type, copyCat.size)
// OUTPUT: undefined large


// QUESTION 2
// What is a generator Function
// ANSWER
// - a process that can be paused and resumed and can yield multiple values
// - generator in JavaScript consists of a generator function, which returns an iterable Generator object.


// QUESTION 3: GET THE RESULT
// const func = () => {
//     const a = 2
//     return () => console.log(`a is ${a}`)
// }
// const a = 1
// const test = func()
// test()
// OUTPUT: a is 2


// QUESTION 4: GET THE RESULT
// function sum(num1, num2=2, num3=3){
//     console.log(`num1: ${num1} - num2: ${num2} - num3: ${num3}`)
//     return num1 + num2 + num3
// }

// let values = [1, 5]
// let total = sum(4, ...values)
// OUTPUT: 10