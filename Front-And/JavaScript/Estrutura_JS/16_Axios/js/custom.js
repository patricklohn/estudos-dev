const postFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    Headers: { 
        Accept: "application/json",
        authorization: "meunovotoken",
    }
})