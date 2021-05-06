import React, { useContext, useState } from 'react';
import './ImgDetail.scss';
import { useParams } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImproveImg from '../ImproveImg/ImproveImg';
import { DataContext } from '../../../context/DataContext';

const ImgDetail = () => {
    const [ajusteName, setAjusteName] = useState([])
    const [ajusteValue, setAjusteValue] = useState([])
    const { flag, btn } = useContext(DataContext)
    const { name } = useParams();

    const handlerValue = (e) => {
        setAjusteName(e.target.name)
        setAjusteValue(Number(e.target.value))
    }

    console.log(ajusteName, ajusteValue);
    return (
        <div className="wrap-actions-img">
            <Row>
                <Col xs={3}>
                    <ImproveImg name="con" />
                </Col>
                <Col xs={9}>
                    <div className="wrap-img">
                        {
                            ajusteName.length > 0 ? (
                                <Image alt=""
                                    src={`https://assets.imgix.net/unsplash/${name}?${ajusteName}=${ajusteValue}`}
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
                                <div>
                                    <input type="number" name={`${btn}`} min="-100" max="100" step="1" onChange={handlerValue} />
                                </div>
                            )

                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ImgDetail;