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
    const [params, setParams] = useState([]);
    const [url, setUrl] = useState("");
    const [hideMenu, setHideMenu] = useState(false);

    const urlImg = "https://assets.imgix.net/unsplash/";

    //consume photos API
    useEffect(() => {
        setLoading(true);
        try {
            axios("https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json")
                .then((res) => {
                    setData(res.data);
                })
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }, [])

    //Pass data from the params to the state of btn so that the names appear in the buttons
    useEffect(() => {
        setNameButtons(Params);
    }, [])


    //Pass the parameters of the button that you click
    const addControl = (v) => {
        let parametros = [...Params]
        parametros.forEach((param) => {
            if (v === param.alias) {
                setBtn(param)
            }
        })
        setFlag(true);
    }

    // filter the data of the params to be able to take a single value per parameter
    // and build the url with all the effects we want in the photos
    const addParamUrl = (alias, value) => {
        let aux = [...params];
        let isParam = false;

        aux.forEach((a) => {
            if (a.alias === alias) {
                isParam = true;
                a.value = value;
                setParams(aux);
            }
        })
        !isParam &&
            setParams([...aux, { alias, value }]);
        convertUrl();

    }

    //Convert the array of objects into a string to use as the url of the image
    const convertUrl = () => {
        let stringP = "";
        for (let i = 0; i < params.length; i++) {
            stringP = stringP + `${params[i].alias}=${params[i].value}&`

        }
        setUrl(stringP);

    }

    //reset url with change img
    const resetUrl = () => {
        setUrl("");
        setParams([]);
        setFlag(false);
    }

    //delete the last parameter added
    const removeItem = () => {
        params.pop();
        convertUrl();
        setFlag(false);
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
                loading,
                params,
                setParams,
                addParamUrl,
                url,
                removeItem,
                hideMenu,
                setHideMenu,
                resetUrl,
                urlImg
            }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
