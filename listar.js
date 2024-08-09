console.log("Tabalhando com listas")

const idadeComprador = 15;

const listaDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDestinos.push(`Curitiba`); //Adicionando elementos no Array

console.log("Destinos possíveis");
console.log(listaDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDestinos.splice(1,1)
}