import React, { useContext } from 'react';
import './ImproveImg.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../../../context/DataContext';

const ImproveImg = (props) => {
    const { addControl } = useContext(DataContext);

    return (
        <div className="improves-content">
            <Button variant="primary" onClick={()=>addControl(props.name)}>{props.name}</Button>
        </div>
    )
}
export default ImproveImg;