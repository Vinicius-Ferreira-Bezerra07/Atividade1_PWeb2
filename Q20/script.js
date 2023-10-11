const peso = parseFloat(prompt("Informe seu peso em kg: "))
const altura = parseFloat(prompt("Informe sua altura em metros(Ex: 1.80): "))
console.log(peso);
console.log(altura);

const imc = (peso / (altura * altura))
console.log(imc);

document.write("Seu IMC é: ", imc)