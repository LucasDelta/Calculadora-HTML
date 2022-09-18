let numero1 = 0
let operacao = ""

function digitarNumeros(numero) {

  let resultado = document.getElementById("defaut0");
  if (resultado.innerText == 0) {
    resultado.innerText = numero;
  } else if (resultado.innerText.length <= 12) {
    resultado.innerText += numero;
  }
}

function apagar() {
  let resultado = document.getElementById("defaut0")
  resultado.innerText = "0"
  numero1 = 0
  operacao = ""
}

function somar() {
  if (document.getElementById("defaut0").innerText != 0) {
    numero1 = document.getElementById("defaut0").innerText
    document.getElementById("defaut0").innerText = "0"
    operacao = "+"
  }

}

function divisao() {
  if (document.getElementById("defaut0").innerText != 0) {
    numero1 = document.getElementById("defaut0").innerText
    document.getElementById("defaut0").innerText = "0"
    operacao = "/"
  }

}

function porcentagem() {
  if (document.getElementById("defaut0").innerText != 0) {
      document.getElementById("defaut0").innerText /= 100 
  }

}

function maisMenos() {
  if (document.getElementById("defaut0").innerText != 0) {
      document.getElementById("defaut0").innerText *= -1 
  }

}

function multiplicacao() {
  if (document.getElementById("defaut0").innerText != 0) {
    numero1 = document.getElementById("defaut0").innerText
    document.getElementById("defaut0").innerText = "0"
    operacao = "*"
  }

}

function subtracao() {
  if (document.getElementById("defaut0").innerText != 0) {
    numero1 = document.getElementById("defaut0").innerText
    document.getElementById("defaut0").innerText = "0"
    operacao = "-"
  }

}


function calcular() {
  let numero2 = document.getElementById("defaut0").innerText
  if (numero2 != 0 && operacao == "+") {
    document.getElementById("defaut0").innerText = Number(numero1) + Number(numero2)
  }
  if (numero2 != 0 && operacao == "-") {
    document.getElementById("defaut0").innerText = Number(numero1) - Number(numero2)
  }
  if (numero2 != 0 && operacao == "*") {
    document.getElementById("defaut0").innerText = Number(numero1) * Number(numero2)
  }
  if (numero2 != 0 && operacao == "/") {
    document.getElementById("defaut0").innerText = Number(numero1) / Number(numero2)
  }
 
}

