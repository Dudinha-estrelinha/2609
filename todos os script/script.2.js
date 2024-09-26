let soma = 0;
let numero = 7;

for (let i = 0; i < 20; i++) {
  console.log('Número da sequência: ${numero}');
  soma += numero;
  numero += 4; 
}
console.log('A soma dos 20 primeiros números da sequência é: ${soma}');
