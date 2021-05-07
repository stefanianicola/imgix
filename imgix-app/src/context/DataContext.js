import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Params from '../Data/Params';
export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [btn, setBtn] = useState([]);
    const [nameButtons, setNameButtons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect (()=>{
        setLoading(true);
        axios("https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json")
        .then((res)=>{
          setData(res.data);
        })
        setLoading(false);
      }, [])

    useEffect(()=>{
        setNameButtons(Params);
    }, [])

    const addControl = (v)=>{
        let parametros = [...Params]
        parametros.forEach((param)=>{
            if(v === param.alias){
                setBtn(param)
            }
        })
        setFlag(true);  
    }

    
    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                addControl,
                nameButtons,
                flag,
                btn,
                loading
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
