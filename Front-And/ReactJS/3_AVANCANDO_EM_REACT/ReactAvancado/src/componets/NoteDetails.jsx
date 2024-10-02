import React from 'react'

const NoteDetails = ({brand, color, type}) => {
  return (
    <div>
        <h4>Notebooks da lista</h4>
        <ul>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>Tipo: {type}</li>
        </ul>
    </div>
  )
}

export default NoteDetails