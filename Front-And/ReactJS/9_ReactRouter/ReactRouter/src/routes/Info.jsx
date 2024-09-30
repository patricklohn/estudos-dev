import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const {id} = useParams();

  return (
    <div>
        <h1>Informações</h1>
        <p>Mais iformações do produto {id}</p>
    </div>
  )
}

export default Info