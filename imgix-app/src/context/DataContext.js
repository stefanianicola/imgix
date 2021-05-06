import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const DataContext = createContext();

const DataContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [btn, setBtn] = useState([]);

    useEffect (()=>{
        axios("https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json")
        .then((res)=>{
          setData(res.data);
        })
      }, [])

    const addControl = (v)=>{
        setFlag(true);
        setBtn(v);
        console.log(v)
    }

    
    return (
        <DataContext.Provider
            value={{
                data,
                setData,
                addControl,
                flag,
                btn
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
