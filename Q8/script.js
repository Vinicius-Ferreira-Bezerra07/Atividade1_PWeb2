let tag = Math.random() * 10;
tag = Math.round(tag)
console.log("A resposta é: ", tag)
let contEr = 0

let er = true

alert("Tente dar um palpite de um numero entre 1 a 10!")

do {
    guess = prompt("Insira seu palpite:")
    if (tag == guess) {
        er = false
    } else if (contEr == 5 || contEr == 10) {
        let br = confirm("Desistir?")
        if (br) {
            break;
        }
    } else {
        // alert("Errou, tente novamente")
    }
    contEr++
    console.log(contEr)
} while (er)

if (er) {
    document.write("Que pena, a resposta está no console!")
} else {
    document.write("Parabéns, você acertou!")
}
