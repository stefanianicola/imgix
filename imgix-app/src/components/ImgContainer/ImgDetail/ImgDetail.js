import React, { useContext } from 'react';
import './ImgDetail.scss';
import { useParams } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImproveImg from '../ImproveImg/ImproveImg';
import ControlParam from './ControlParam/ControlParam';
import History from './History/History';
import { DataContext } from '../../../context/DataContext';
import Imgix from "react-imgix";
import 'font-awesome/css/font-awesome.min.css';

const ImgDetail = () => {
    const { flag, nameButtons, url, params, hideMenu, setHideMenu } = useContext(DataContext)
    const { name } = useParams();

    const handleHideMenu = () => {
        if (!hideMenu) {
            setHideMenu(true)
        } else {
            setHideMenu(false)
        }
    }



    return (
        <div className="wrap-actions-img">
            <Button className="burger-btn" onClick={handleHideMenu} variant="light">
                <i className="fa fa-align-justify" aria-hidden="true"></i>
            </Button>
            <Row>
                {hideMenu && (
                    <Col xs={12} md={2} className="improves-content">
                        <Row>
                            {
                                nameButtons.map((n) => {
                                    return (

                                        <Col xs={4} md={12} key={n.id}>
                                            <ImproveImg name={n.name} alias={n.alias} />
                                        </Col>

                                    )
                                })
                            }
                        </Row>

                    </Col>
                )}


                <Col xs={12} md={10} className="p-0">
                    <div className="wrap-img">
                        <Imgix alt=""
                            src={`https://assets.imgix.net/unsplash/${name}?${url}`}
                            sizes="calc(10% - 10px)"
                        />

                    </div>
                    <div>
                        <p className="url-img">{`https://assets.imgix.net/unsplash/${name}?${url}`}</p>
                    </div>
                    <div className="wrap-from">
                        {
                            flag ? <ControlParam />
                                : <p>Select control</p>
                        }
                    </div>
                    <div className="wrap-history">
                        {
                            params.length > 0 && <History />
                        }
                        <a className="download btn" href={`https://assets.imgix.net/unsplash/${name}?${url}&w=400&dl=${name}`}>Download</a>
                    </div>
                </Col>

            </Row>
        </div>
    )
}
export default ImgDetail;