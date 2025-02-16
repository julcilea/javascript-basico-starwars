//console.log('Olá, Javascript!')

// Variáveis e tipo de dados //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

// console.log(nome)
// //console.log(idade)
// //console.log(jedi)

// console.log(typeof nome)
// //console.log(typeof idade)
// //console.log(typeof jedi)

// var userName = "Papito"
// document.getElementById('user-name').innerHTML = userName

// Operações numéricas //

// var n1 = 7
// var n2 = 5
// var n3 = '5'
// var n4 = 'cinco'
// var n5 = 2.5

// var total = n1 + n2
// console.log(total)

// var total1 = n1 + n3
// console.log(total1)

// var total2 = n1 + parseInt(n3)
// console.log(total2)

// var total3 = n1 + parseInt(n4)
// console.log(total3)

// var total4 = n1 - n2
// console.log(total4)

// var total5 = n1 * n2
// console.log(total5)

// var total6 = n1 / n2
// console.log(total6)

// var total7 = n1 / n5
// console.log(total7)

// Operadores de comparação //

// var v1 = 5
// var v2 = 5
// var v3 = '5'

// var resultado = v1 === v2 // exatamente igual retorma true
// console.log(resultado)

// var resultado = v1 === v3 // exatamente igual retorma false leva em consideração o tipo de dado
// console.log(resultado)

// var resultado = v1 == v3 // exatamente igual retorma true desconsidera a tipagem
// console.log(resultado)

// var resultado = v1 != v3 // exatamente igual retorma true
// console.log(resultado)

// var resultado = v1 !== v3 // exatamente igual retorma true  leva em consideração a tipagem
// console.log(resultado)

// // Igual (==)
// // Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// // Não igual (!=)
// // Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
// 4!=1 //true

// // Igual estrito (===)
// // Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// // Não igual estrito (!==)
// // Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// // Maior que (>)
// // Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// // Maior ou igual que (>=)
// // Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// // Menor que (<)
// // Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro
// 1<2 //true
// 5<3 //false
// 4<'1' //false    

// // Menor ou igual que (<=)
// // Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro
// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

// Funções //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5, 5)

// function boasVindas(nome) {
//     alert(nome + ' , seja bem-vindo(a)!')
// }

// boasVindas('Julcilea')

// Controle de fluxos //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o catão de débito ou crédito

// var saldo = 1000

// function saque(valor) {
//     if (valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     } else if (valor > 700) {
//         console.log('Valor do saque superior ao máximo permitido por operação')
//     } else {
//         saldo = saldo - valor
//     }
// }

// saque(701)
// console.log(saldo)

// Cenario 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo de operação é de 700 reais
// Quando faço um saque de 701 reais
// Então não deve deduzir do saldo
// E deve mostrar uma mensagem de alerta informando o valor é superior ao máximo permitido por peração

// Arrays //

//var gaveteiro = ['Meias', 'Gavetas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[3])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
// console.log(typeof personagens)

// personagens.push('C3PO')
// personagens.push('R2D2') // adiciona um item no final da lista
// console.log(personagens)

// //personagens.pop() // remove o ultimo da lista
// //console.log(personagens)

// personagens = personagens.filter(function(p){return p != 'Darth Vader'}) // remove um item de um determinado lugar da lista
// console.log(personagens)

// personagens = personagens.filter(function(p){return p === 'Mestre Yoda'}) // retorna somente um item
// console.log(personagens)

// Controles de repetição (loops) //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// percorre a lista e imprime cada elemento
//personagens.forEach(function(p){console.log(p)}) 
//for (var i in personagens) {console.log(personagens[i])}

// for (var i = 0; i < personagens.length; i++) {
//     console.log(personagens[i]) 
// }

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){console.log(`A idade do ${this.nome} é de ${this.idade} anos.`)}
// }

// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

// const nome = 'Darth Vader'
// console.log(nome)

// nome = 'Mestre Yoda'
// console.log(nome)