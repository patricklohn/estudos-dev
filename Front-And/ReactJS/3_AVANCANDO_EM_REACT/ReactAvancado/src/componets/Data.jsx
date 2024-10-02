import { useState } from "react"

export const Data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15)
    const [testeUse, setTesteUse] = useState(30)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=> someData = 15}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={()=> setAnotherNumber(20)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {testeUse}</p>
            <button onClick={()=> setTesteUse(20)}>Mudar variável</button>
        </div>
    </div>
  )
}

export default Data