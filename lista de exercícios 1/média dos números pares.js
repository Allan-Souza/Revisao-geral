const mediaAritimeticaPares = () =>{
    let conjunto = [];
    let soma = 0;
    let resultado = 0;
    
    for(let i = 70; i < 101; i++){
      if(i % 2 == 0 && Number.isInteger(i) == true){
        conjunto.push(i)
      }
    }
    for(let i = 0; i < conjunto.length; i++){
      soma += conjunto[i]
    }
    resultado = soma / conjunto.length
    console.log("Sua média é: " + resultado)
    
    return resultado
  }
  
  mediaAritimeticaPares()