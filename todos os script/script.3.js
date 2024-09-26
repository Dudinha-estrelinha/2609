let numCartas = parseInt(prompt("Quantas cartas deseja sortear?"));

for (let i = 0; i < numCartas; i++) {
  let naipe = Math.floor(Math.random() * 4); 
  let numero = Math.floor(Math.random() * 13) + 1; 
  
  let naipes = ["Copas", "Ouros", "Espadas", "Paus"];
  
  console.log('Carta sorteada: ${numero} de ${naipes[naipe]}');
}
