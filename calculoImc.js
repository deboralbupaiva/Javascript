console.log("Calcule o IMC e mostre como você está.")

const altura = 1.58;
const peso = 60;
const imc = peso / altura * altura;

console.log("Seu peso é ",peso, "E sua altura é",altura);
console.log("Seu imc é ",imc);

if(imc >16){
    console.log("Você está com magreza grave");
}
else if(imc =<16 || >=16.9){
    console.log("Você está com magreza moderada");
}

else if(imc <=17 || 18.0 ){
    console.log("Você está com magreza leve");
}

else if(imc <=18.6){
    console.log("Você está com peso ideal");
}


