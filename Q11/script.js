function maiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num2) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

const num1 = parseInt(prompt("Informe o primeiro numero:"))
const num2 = parseInt(prompt("Informe o segundo numero:"))
const num3 = parseInt(prompt("Informe o terceiro numero:"))

document.write("O maior numero é: ", maiorNumero(num1, num2, num3))