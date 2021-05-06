import React from 'react';
import './ActionsContainer.scss';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 const  ActionsContainer = () => {
    return (
        <Col xs={12} md={3} lg={2} className="aside p-0">
            <div className="efects-content">
            <h3>SOY EL CONTENEDOR DE EFECTOS</h3>
            </div>
        </Col>
    )
}
export default ActionsContainer;