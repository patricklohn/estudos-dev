// 1 - instalação 
console.log(postFetch)

// 2 - primeiro request

const getData = async() => {
    try {

       const response = await postFetch.get(
        "/users",
        // 4 - Definindo headers   
        {
            headers: {
                "Content-Type": "application/json",
                custom: "header",
            }
        }
        ); 

       console.log(response)

       return response.data; 
    }catch (error){
            console.log(error)
    }
}

getData();

// 3 - imprimindo dados na tela 
const container = document.querySelector("#user-conteiner");

const printData = async() => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement("div");

        const codElement = document.createElement(`h2`);
        const nameElement = document.createElement("h3");
        const emailElement = document.createElement("p");

        nameElement.textContent = user.name; 
        emailElement.textContent = user.email; 
        codElement.textContent = user.id; 

        div.appendChild(codElement);
        div.appendChild(nameElement);
        div.appendChild(emailElement);

        container.appendChild(div);

    });
}

printData();

//5 - post 

const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body")

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    axios.post("/posts", {
        title: titleInput.value , body:bodyInput.value, userId: 1,
    });
})

//
