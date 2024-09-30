import React from 'react'
import { useRouteError } from 'react-router-dom'
import workTI from '../assets/workTI.jpg';

const ErrorPage = () => {

    const error = useRouteError();

    console.log(error);
    
  return (
    <div>
        <h1>Error</h1>
        <p>Oi, aparentemente ocorreu um erro não esperado. Favor retornar mais tarde enquanto a Ti efetua o ajuste.</p>
        <img src={workTI} alt="Ti trabalhando" />
        <p>
            {error.statusText}
        </p>
        <p>
            {error.error.message}
        </p>
    </div>
  )
}

export default ErrorPage