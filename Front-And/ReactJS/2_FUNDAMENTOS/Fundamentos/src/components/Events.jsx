import React from 'react'

export const Events = () => {

  const clickBtn = () =>{
    console.log("Teste de function");
  };

  const renderSomething = (x) => {
    if(x){
      return <h1>Renderizando isso</h1>
    }else{
      return <h1>Renderizando outra coisa!</h1>
    }
  }

  

  return (
    <div>
        <div>
            <button onClick={()=>console.log("Teste de evento click")}>
                clique aqui
            </button>
        </div>
        <br/>
        <div>
            <button onClick={clickBtn}>
                clique aqui 2
            </button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events;