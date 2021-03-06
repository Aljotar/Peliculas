import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FormLogin } from '../Components/formLogin/FormLogin';

function Login({ requestUserData }) {

    return (
        <Container>
            <Row>
                <Col className="col-12 col-lg-8 d-flex flex-column justify-content-between mx-auto my-5">
                    <FormLogin requestUserData={requestUserData}/>
                </Col>
            </Row>
        </Container >
    )
}

export default Login