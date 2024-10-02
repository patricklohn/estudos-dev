import { useState } from "react";

const ListRender = () => {
const [list] = useState(["Patrick", "Vanessa", "Janete"]);

const [users, setUsers] = useState([
    {id: 1, name:"Patricke", age: 20},
    {id: 2, name:"Vanessaa", age: 18},
    {id: 3, name:"Janetee", age: 48}
])

const deleteRandow = () =>{

    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers)=> 
        prevUsers.filter((user) => randomNumber !== user.id)
);

} 

  return (
    <div>
        {/* 4 - render sem key */}
        <ul>
            {list.map((name, i) => (
                <li key={i}>{name}</li>
            ))}
        </ul>
        {/* 5 - render utilizando key */}
         <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age}</li>
        ))}
        </ul>
        {/* 6 - previus state */}
        <button onClick={deleteRandow}>Delete random user</button>
    </div>

    
  )
}

export default ListRender