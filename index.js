function imprimirOlaMundo(){
    console.log("Olá Mundo!");
}

imprimirOlaMundo(); 

/* function calculaArea(altura, largura){
    const area = altura * largura;
    console.log(area);
}

calculaArea(2, 3); 

function imprimirNome(nome){
     console.log("Ola, " + nome);
}

imprimirNome("Mariana");
imprimirNome("Diênifer");
imprimirNome("João"); 

//let lerNome = prompt("Qual seu nome?");
//imprimirNome(lerNome);

const a = 1;
function imprimeVariavel(){
    const b = 2;
    console.log('Variável a', a);
    console.log('Variável b', b);
}

imprimeVariavel();

console.log('Variável a', a);
console.log('Variável b', b);
 

function calculaArea2(altura, largura){
    const area = altura * largura;
    return area;
}

const areaCalculada = calculaArea2(2, 3);
console.log(calculaArea2(2, 3));


function somarNumeros(primeiro, segundo){
    const soma = primeiro + segundo;
    return soma;
}
const resultadoDaSoma = somarNumeros(20, 30);
console.log(somarNumeros(20, 30));




function array(){
    const divisao3 = listaNumeros[listaNumeros.length -1] / 2;
    const divisao0 = listaNumeros[0] / 2;
    return novoArray = [divisao3, divisao0];
}
 let listaNumeros = [10, 20, 30, 40];
console.log(array(listaNumeros));


function retornaPrimeiroEUltimo(meuarray = []){
    let novoArray = [];
    novoArray[0] = (meuarray[meuarray.length -1])/2;
    novoArray[1] = (meuarray[0])/2;
    return novoArray;
}
let antigoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(retornaPrimeiroEUltimo(antigoArray));
