import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../shared/LeftSideNav';
import RightSideNav from '../shared/RightSideNav';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className=' mt-5rem'>
                <Row className='mt-5'>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;