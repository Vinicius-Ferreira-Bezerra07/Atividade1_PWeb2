const num1 = Number(prompt("Informe umm número"))

if (num1 >= 1) {
    document.write(num1, " é positivo.")
} else if (num1 < 0) {
    document.write(num1, " é negativo.")
} else {
    document.write(num1, " é zero.")
}