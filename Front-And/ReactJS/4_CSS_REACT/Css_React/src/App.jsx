import './App.css'

// 2 - css componente
import MyComponete from './assets/componentes/MyComponete'

// 6 - css modules 
import Title from './assets/componentes/Title';

function App() {
  const n = 15;

  const redTitle = true;
  return (
    <div className='App'>
      {/* 1 - css Global */}
      <h1>CSS em React</h1>
      {/* 2 - Css de compoete */}
      <MyComponete/>
      {/* 3 - Inlie Style */}
      <p style={{color:"black", borderBottom:"1px solid black"} }>Este elemento possui inlane Style</p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? {color:"purple"} : {color: 'yellow'}}>
        CSS dinâmico
      </h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter uma classe diamica</h2>
      {/* 6 - Css modules  */}
      <Title/>
    </div>
  )
}

export default App
