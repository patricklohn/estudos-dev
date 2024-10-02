import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

import './App.css'



function App() {
  // 1 - Resgatando os dados
  const [products, setProducts] = useState([]);

  // useEffect(() =>{

  //   async function getData(){
  //     const res = await fetch(url);
  //     const data =await res.json();
  //     setProducts(data);
  //   }
    
  //   getData();
  // },[])

  // 4 - Custom hook
  const {data: items, httpConfig, loaging, error} = useFetch(url);

  // 2 - Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    // 5 - refatorando post
    httpConfig(product, "POST");


    // const res = await fetch(url,{
    //   method: "POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });
    // // 3 - Carregamento dinamico 
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
  };

  return (
      <div>
       <h1>Http em React</h1>
       {/* 6 - Loading*/}
       {loaging && <p>Carregando....</p>}
       {/* 7 - tratado errors*/}
       {error && <p>{error}</p>}
       {/* 1 - resgate de dados*/}
       {/* <ul>
        {products.map((products) => (
          <div key={products.id}>
            <li>Produto - {products.name}</li>
            <p>Preço R${products.price}</p>
          </div>
        ))}
       </ul> */}
       <ul>
        {items && 
        items.map((items) =>(
          <div key={items.id}>
          <p>Produto: {items.name} / Preço: {items.price}</p>
        </div>
        ))}
       </ul>
       {/* 2 - enviando dados */}
       <div className="add-product">
        <form id='FormAdd' onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* <input id='btn' type="submit" value="Enviar"/> */}
          {/* 7 - Loading post */}
          {loaging && <input id='btn' type="submit" disabled value="Aguarde"/>}
          {!loaging && <input id='btn' type="submit" value="Enviar"/>}
        </form>
       </div>
      </div>
  )
}

export default App
