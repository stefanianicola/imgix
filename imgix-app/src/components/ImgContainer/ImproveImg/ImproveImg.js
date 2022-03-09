import React, { useContext } from 'react';
import './ImproveImg.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../../../context/DataContext';

const ImproveImg = (props) => {
    const { addControl } = useContext(DataContext);

    return (
        <div className="buttons">
            <Button variant="link" className="d-block ml-2" onClick={() => addControl(props.alias, props.min, props.max)}>{props.name}</Button>
        </div>
    )
}
export default ImproveImg;