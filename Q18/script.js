const text = prompt("Insira um texto aqui")

let splitText = text.split("")
console.log(splitText);

let invertedText = []

for (let i = splitText.length-1; i >= 0 ; i--) {
    invertedText.push(splitText[i])
    // console.log(i);
}
console.log(invertedText);

invertedText = invertedText.join()
splitText = splitText.join()

// console.log(splitText == invertedText);
 if (splitText == invertedText) {
    document.write("Texto é palíndromo")
 } else {
    document.write("O texto não é palíndromo")
 }