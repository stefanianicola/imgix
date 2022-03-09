import React, { useContext } from 'react';
import './ImgixLazy.scss';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../../../../context/DataContext';
import Imgix from "react-imgix";
import 'font-awesome/css/font-awesome.min.css';

const ImgixLazy = () => {
    const { urlImg, url } = useContext(DataContext);
    const { name } = useParams();

    return (
        <Imgix className='imgSelected'
            alt=""
            src={`${urlImg}${name}?${url}`}
            sizes="calc(10% - 10px)"
        />
    )
}
export default ImgixLazy;