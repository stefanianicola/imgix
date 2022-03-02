import React, { useContext } from 'react';
import './ImgContainer.scss';
import { Row, Col, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import Imgix from 'react-imgix';



const ImgContainer = () => {
    const { data, loading } = useContext(DataContext);

    return (
        <div>
            {
                loading ? (
                    <div className="text-center">
                        <Spinner animation="grow" variant="info" size="sm" />
                    </div>
                )
                    : (
                        <Row className="justify-content-center m-0 p-0">
                            {
                                data.map((d, i) => {
                                    return (
                                        <Col xs={12} md={2} className="img-content" key={i}>
                                            <Link to={`/${d.name}`}>
                                                <Imgix src={d.url}
                                                    alt=""
                                                    width={230}
                                                    height={220}
                                                />
                                            </Link>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
            }

        </div>
    )
}
export default ImgContainer;