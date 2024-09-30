import './App.css'
// 2 - imagem em assets
import car from './assets/img/concessionaire.jpg'
// 3 - useState
import Data from './componets/Data'
// 4 - Renderização de listas
import ListRender from './componets/ListRender'
// 7 - Conditional Render
import ConditionalRender from './componets/ConditionalRender'
// 8 - Props
import ShowUserName from './componets/ShowUserName'
// 9 - Desestruturando props
import CarDetails from './componets/CarDetails'
// 11 - renderização de listas com Componentes
import NoteDetails from './componets/NoteDetails'
const note = [
  {id: 1, brand: "Dell", color: "Silver", type:"Gamer"},
  {id: 2, brand: "Acer", color: "Silver", type:"Basic"},
  {id: 3, brand: "Avell", color: "Black", type:"Gamer"},
]
// 12 - Fragment
import Fragment from './componets/Fragment'
// 13 - Children
import Container from './componets/Container'
// 14 - função em prop
import ExecuteFunction from './componets/ExecuteFunction'
// 15 -  State lift
import { useState } from 'react'
import Message from './componets/Message'
import ChangeMessage from './componets/ChangeMessage'

function App() {
  // 14 - funcção em prop
  function showMessage(){
  console.log("Evento componente Pai")
  }

  // 15 - state lift 

  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <p>Imagem em public</p>
        <img src="/newHouse.jpg" alt="Nova casa" style={{height: "250px", width: "350px"}}/>
        {/* 2 - Imagem em assets */}
        <p>Imagem em Assets</p>
        <img src={car} alt="Carro" style={{height: "250px", width: "350px"}} />
        {/* 3 - useState */}
        <Data/>
        {/* 4 - Renderização de listas */}
        <ListRender/>
        {/* 7 - Conditional Render */}
        <ConditionalRender/>
        {/* 8 - Props */}
        <ShowUserName name=" Patrick"/>
        {/* 9 - Desestruturando props */}
        <CarDetails brand="Chevrolet" km={53} color="Prata"/>
        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand="VW" km={100} color="Branco"/>
        <CarDetails brand="Fiat" km={75} color="Branco"/>
        {/*11 - renderização em lista com loop */}
        {note.map((not)=>(
          <NoteDetails key={not.id} brand={not.brand} color={not.color} type={not.type}/>
        ))}
        {/* 12 - Fragment */}
        <Fragment />
        {/* 13 - Children */}
        <Container>
          <p>Alguma coisa</p>
          <ShowUserName name=" Patrick"/>
        </Container>
        {/* 14 - funcao em prop */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* 15 -  State lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
