import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Navbar, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {


    return (
        <Col xs={12} className="p-0 head">
            <Navbar expand="md">
                <Col xs={12} className="wrap-logo">
                    <Navbar.Brand >
                        <Link to="/">
                            <img
                                src="https://assets.imgix.net/presskit/imgix-presskit.pdf?page=3&fm=png&w=320&dpr=2"
                                width="auto"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Link>
                    </Navbar.Brand>
                </Col>
            </Navbar>
        </Col>
    )
}

export default Header;