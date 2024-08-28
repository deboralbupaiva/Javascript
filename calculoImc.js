console.log("Calcule o IMC e mostre como você está.")

const altura = 1.58;
const peso = 60;
const imc = (peso / (altura * altura));

console.log("Seu peso é ",peso, "e sua altura é",altura);
console.log("Seu imc é ",imc);

if(imc < 16){
    console.log("Você está com magreza grave");
}
else if(imc >=16.1 && imc <=16.9){
    console.log("Você está com magreza moderada");
}
else if(imc >=17 && imc <=18.5){
    console.log("Você está com magreza leve");
}
else if(imc >=18.6 && imc <=24.9){
    console.log("Você está com peso ideal");
}
else if(imc >=25 && imc <=29.9){
    console.log("Você está com sobrepeso");
}
else if(imc >=30 && imc <=34.9){
    console.log("Você está com obesidade grau I");
}



