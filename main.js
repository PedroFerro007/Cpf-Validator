(function(){

let cpf = '237.996.210-32'; // Faça o teste alterando essa variável
let cpfLimpo = cpf.replace(/\D+/g, ''); //string
let cpfArray = Array.from(cpfLimpo); //string
cpfArray.splice(-2, 2);


const multiplicaCpf = () => {
    const resultado = cpfArray.map((valor, indice) => {
        const multiplicadores = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        return Number(valor) * multiplicadores[indice];
    })
    return resultado;
};


const somaCpf = () => {
    const multi = multiplicaCpf();
    const soma = multi.reduce((acumulador,valor) =>{
        return acumulador + valor;
    })
    return soma;
};

const primeiroDigito = () => {
    const soma = somaCpf();
    const resultado = 11 - (soma % 11);
    if(resultado>9) return 0;
    return resultado;

};

let arrayUm = cpfArray;
arrayUm.push(primeiroDigito());

const multiplicaCpf2 = () => {
    const resultado = arrayUm.map((valor, indice) =>{
        const multiplicadores = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        return Number(valor) * multiplicadores[indice];
    })

    return resultado;

};

const somaCpf2 = () => {
    const multi = multiplicaCpf2();
    const soma = multi.reduce((acumulador, valor) =>  acumulador + valor);
    return soma;
};

const segundoDigito = () => {
    const resultado = 11 - (somaCpf2() % 11);
    if(resultado>9) return 0;
    return resultado;
};

let cpFinal = arrayUm;
cpFinal.push(segundoDigito());

const cpfFinal = cpFinal.join('');


if(cpfFinal === cpfLimpo) return console.log('CPF VÁLIDO');
return console.log('Inválido');

})()


