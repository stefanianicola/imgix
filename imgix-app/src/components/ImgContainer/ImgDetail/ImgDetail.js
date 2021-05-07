import React, { useContext, useState } from 'react';
import './ImgDetail.scss';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImproveImg from '../ImproveImg/ImproveImg';
import { DataContext } from '../../../context/DataContext';

const ImgDetail = () => {
    const [params, setParams] = useState([]);
    const { flag, btn, nameButtons } = useContext(DataContext)
    const { name } = useParams();

    const handlerValue = (e) => {
        let param = [];
        param.push(`${e.target.name}=${e.target.value}&`)
        setParams(param);
    }

    return (
        <div className="wrap-actions-img">
            <Row>
                <Col xs={3}>
                    <div className="improves-content">
                        {
                            nameButtons.map((n) => {
                                return <ImproveImg name={n.name} alias={n.alias} key={n.id} />
                            })
                        }
                    </div>
                </Col>
                <Col xs={9}>
                    <div className="wrap-img">
                        {
                            params.length > 0 ? (
                                <Image alt=""
                                    src={`https://assets.imgix.net/unsplash/${name}?${params}`}
                                    fluid
                                />
                            ) : (
                                <Image alt=""
                                    src={`https://assets.imgix.net/unsplash/${name}`}
                                    fluid
                                />
                            )
                        }


                        {
                            flag && (
                                <Form>
                                    <Form.Group controlId="formBasicRange">
                                        <Form.Label>{`${btn.name}`}</Form.Label>
                                        <Form.Control type="range" 
                                                    name={`${btn.alias}`} 
                                                    min={`${btn.min}`} 
                                                    max={`${btn.max}`} 
                                                    onChange={handlerValue} />
                                        <p className="minimo">{`${btn.min}`} </p>
                                        <p className="maximo">{`${btn.max}`} </p>
                                    </Form.Group>
                                </Form>
                            )

                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ImgDetail;