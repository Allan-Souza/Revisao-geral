const tabuadaDeSubtracao = (num) => {
    for(let i = 1; i <= 10 ; i++){
     console.log(num + " - " + i + " = " + ( num - i ));
    }
  }
  
  tabuadaDeSubtracao(parseInt(prompt("Digite um número para ver a tabuada de subtração")))