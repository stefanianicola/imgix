import React, { useContext } from 'react';
import './ImgDetail.scss';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImproveImg from '../ImproveImg/ImproveImg';
import ControlParam from './ControlParam/ControlParam';
import History from './History/History';
import { DataContext } from '../../../context/DataContext';
import Imgix from "react-imgix";
import 'font-awesome/css/font-awesome.min.css';

const ImgDetail = () => {
    const { flag, nameButtons, url, params } = useContext(DataContext)
    const { name } = useParams();


    return (
        <div className="wrap-actions-img">
            <Row>
                <Col xs={3} className="improves-content">
                    <div>
                        {
                            nameButtons.map((n) => {
                                return <ImproveImg name={n.name} alias={n.alias} key={n.id} />
                            })
                        }
                    </div>
                </Col>
                <Col xs={9} className="p-0">
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