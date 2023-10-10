let media = 0

for (let i = 0; i < 5; i++) {
    media += parseInt(prompt("Insira um numrero: "))
}

console.log(media)
media = media/5

document.write("A media dos numeros é: ", media)