const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

let obj = {}

input.forEach(e => {
   let key =  Object.keys(e)[0]
   obj[key] = e[key]
})

console.log(obj)