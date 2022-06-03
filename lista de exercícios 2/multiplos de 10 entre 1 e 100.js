const contador = () => {
    for(let i = 0; i < 101; i++){
      if(i % 10 == 0){
        console.log(i, "multiplo de 10 ")
      }else{
        console.log(i)
      }
    }
  }
  contador()