import React , { useState , useEffect } from 'react';
const Hello = () => {
    const [initialState, setInitialState] = useState([])

    useEffect(()=>{
        try{
            fetch('/api/').then(res => {
                if(res.ok){
                    return res.json()
                }
            }).then(jsonResponse => setInitialState(jsonResponse.hello))

        }catch(error){
            console.log(error);
        }
    },[])

    console.log(initialState);

    return(
        <div>
            {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
        </div>
    )
}

export default Hello;