import React from 'react'

const Container = ({children}) => {
  return (
    <div>
        <h1>Conteudo do componete Pai:</h1>
        {children}
    </div>
  )
}

export default Container