const tag = parseInt(prompt("Insira um numero para calcular seu fatorial."))
let fat

console.log(tag);
for(let i = tag; i > 0; i--){
    fat *= i
    console.log(fat);
}