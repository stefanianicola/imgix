import React, { useContext } from 'react';
import './History.scss';
import { DataContext } from '../../../../context/DataContext';
import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const History = () => {
    const { removeItem } = useContext(DataContext)

    return (
        <div>
            <Row className="row-prev">
                <Col xs={3}>
                <Button  onClick={removeItem}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                Prev
                </Button>
                </Col>
            </Row>
        </div>
    )
}
export default History;