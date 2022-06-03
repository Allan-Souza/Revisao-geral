const receberValores = (num1, num2) => {
    if(num1 == 0) {
      console.log("Valor Inválido!");
    }else if(num1 !== 0) {
      let resultado = num1 % num2
      console.log("O resto da divisão dos seus números é: " + resultado)
    }else{
      console.log("Tente novamente")
    }
  }
  var num1 = parseInt(prompt("Digite o primeiro número"))
  var num2 = parseInt(prompt("Digite o segundo número"))
  
  receberValores(num1, num2)