import "./MyForm.css";
import React from 'react'
import { useState } from "react";

const MyForm = ({userName, userEmail}) => {

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role , setRole] = useState("");

  // 3 - Salvando valor no UseSTATE
  const handleName = (e) =>{
    setName(e.target.value);
  }

   const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(bio)
    console.log(role)

    // 7 - Limpar input 
    setName("");
    setEmail("");
    setBio("");
    setRole("");
   }


  return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                {/* 6 - controled input  */}
                <input type="text" name="name" placeholder="Coloque seu nome aqui!" value={name || ""} onChange={handleName}/>
            </div>
            {/* 2 -label envolvendo input   */}
            <label>
              <span>E-email:</span>
              {/* 4 - RESUMINDO O SCOPO */}
              <input type="email" name="email" placeholder="Digite seu email" value={email || ""} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label> 
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuario" value={bio || ""} onChange={(e) => setBio(e.target.value)}></textarea>
            </label>
            {/* 9 - Select */}
            <label>
              <span>Função do sistema</span>
              <select name="role" value={role || ""} onChange={(e)=> setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="adm">Adm</option>
              </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm