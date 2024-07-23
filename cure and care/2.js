const input = { a: 1, b: 2, c: 3 };

let output = Object.keys(input).map(e =>({[e]: input[e]}))

console.log(output)

