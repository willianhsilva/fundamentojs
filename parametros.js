//Parametros de função

function soma(num1, num2){
    return num1 + num2;
}

//console.log(soma(52,6))

//parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade('Willian', 32))

function multiplica(num1, num2){
    return num1*num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))