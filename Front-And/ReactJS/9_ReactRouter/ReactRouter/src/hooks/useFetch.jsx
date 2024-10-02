import { useState, useEffect } from 'react';

// 4 - custom hooks
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    const [config, setConfig] = useState(null)
    const [Method, setMethod] = useState(null)
    const [callFetch, setcallFetch] = useState(null)

    // 6 - loading

    const [loaging, setLoading] = useState(false);

    // 7 - erros 

    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers:{
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }
    }

    useEffect(() =>{
        
        const fetchData = async () => {
            // 7 - tratado erros
            try{
                // 6 - loading
                setLoading(true);

                const res = await fetch(url);
                const json = await res.json();

                

             setData(json);
            }catch (error){
                console.log(error.message)

                setError("Houve algum error ao carregar os dados!");
            }
            setLoading(false);
        };

        fetchData()
    }, [url, callFetch]);

    // 5 - refatorando post 
    useEffect(() => {
    
        const httpRequest = async() =>{

            let json

            if(Method === "POST"){
                setLoading(true);
                let fetchOpstions = [url, config]

                const res = await fetch(...fetchOpstions)

                json = await res.json();
                setLoading(false);
            }
            setcallFetch(json)
        }
        httpRequest()
    }, [config, Method, url]);

    return {data, httpConfig, loaging, error};
}