
console.log(imc)

if( imc < 18.5){
    console.log("Abaixo do peso")
} else if( imc >= 18.5 && imc < 24.99){
    console.log("Peso normal")
} else if(imc >= 30.0 && imc < 34.99){
    console.log("Obesidade grau 1")
} else if (imc >= 35.0 && imc < 39.99){
    console.log("Obesidade grau 2")
} else {
    console.log("Obesidade grau 3")
}

function calcularIMC(){
let altura=document.getElementById("altura").value
let peso=document.getElementById("peso").value

altura = parseFloat(altura)
peso = parseFloat(peso)

let imc = peso / altura**2

document.getElementById("resultado-imc").textContent += imc
}