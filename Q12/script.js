const num1 = parseInt(prompt("Insira um numero!"))
let tag = 1

for (let i = 2; i <= num1; i++) {
    if (num1 % i == 0) {
        tag += 1
    }
}

if (tag <= 2) {
    document.write(num1, "É um numero primo.")
} else {
    document.write(num1, "Não é um numero primo")
}