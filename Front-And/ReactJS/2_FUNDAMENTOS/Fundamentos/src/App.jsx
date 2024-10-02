import './App.css'

import FirstComponent from "./components/FirstComponent";
// 4 - template expression
import TesterJs from './components/TesterJs';
// 5 - Hierarquia 
import MyComponent from './components/MyComponent';
// 6 - Evento click
// 7 - Função no evento
// 9 - Função de renderização
import Events from './components/Events';


// 2 - importando o componente 
function App() {

  return (
    // 3 -comentarios
    <div className='App'>
      {/*3  comentários JSX*/}
    <h1>Fundamentos do react</h1>
    <FirstComponent />
    <TesterJs />
    <MyComponent/>
    <Events/>
    </div>
  )
}
export default App
