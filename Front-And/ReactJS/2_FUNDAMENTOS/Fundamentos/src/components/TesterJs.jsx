import MyComponent from "./MyComponent";

// 4 - Template expression

export const TesterJs = () => {
    const name = "Patrick";
    const data ={
        age: 21, 
        job: "Programador"
    }

  return (
    <div>
      <MyComponent/>
        <p>A soma é {2+2}</p>
        <p>Bem vindo {name}</p>
        <p>Sua idade seria {data.age}</p>
    </div>
  )
}

export default TesterJs;
