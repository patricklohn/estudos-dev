import { useFetch } from '../hooks/useFetch'
import {useParams, Link} from "react-router-dom"; 

const Product = () => {
    const {id} = useParams();
    const url = "http://localhost:3000/products/" + id;

    const {data: product} = useFetch(url);

    if(!product) return <p>Carregando...</p>

    return (
    <div>
        <h1>TESTE</h1>
        <p>ID do produto:{id}</p>
        <div>
            <h1>Nome do Produto {product.name}</h1>
            <p> preço do produto ${product.price}</p>
            {/* { 8 - Nest route} */}
            <Link to={`/products/${product.id}/info`}>Mais informaçoes</Link>
        </div>
    </div>
  )
}

export default Product