let titulo = document.querySelector("h1");;
titulo.innerHTML = "Hora do desafio";

function botaoConsole() {
    console.log("Você apertou o botão do Console!")
}
function botaoAlert() {
    alert("Eu amo JS")
    console.log("O botão alerta foi apertado")
}
function botaoPrompt() {
    let promptCidade = prompt("Qual cidade você mora?")
    if (promptCidade) {
        alert("Estive em " + promptCidade ("e lembrei de você"))
        console.log("O botão prompt foi apertado")
    } else {
        alert("Você não digitou nada!")
    }
}
function botaoSoma() {
    let num1 = parseInt(prompt("Digite o primeiro número:"))
    let num2 = parseInt(prompt("Digite o segundo número:"))
    let soma = num1 + num2
    alert("A soma é " + soma)
    console.log("O botão soma foi apertado")
}