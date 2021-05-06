import React, { useContext } from 'react';
import './ImgContainer.scss';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../../context/DataContext';
import { Link } from 'react-router-dom';



const ImgContainer = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <Row className="justify-content-center m-0 p-0">
           
                {
                    data.map((d, i) => {
                        return (
                            <Col xs={12} md={2} className="img-content" key={i}>
                                <Link to={`/${d.name}`}>
                                    <Image src={d.url}
                                        alt=""
                                        width={160}
                                        height={150}
                                    />
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default ImgContainer;