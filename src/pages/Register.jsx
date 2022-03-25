import React, { useState } from 'react'
import { Container} from 'react-bootstrap'
import { FormRegister } from '../Components/formRegister/FormRegister'

function Register() {

    const [verMas, setVerMas] = useState(false);
    const extraContent = (
        <>
           
           <h5 className="px-5 px-md-0 pe-md-5 ">REGÍSTRESE AHORA GRATIS y obtene descuentos en cada compra a través de nuestro Programa de Beneficios.</h5>
        </>
    );
    const linkContent = verMas ? "<< Ver menos" : "Ver más >>";
    const verMasClick = (e) => {
        setVerMas(!verMas);
    };
    return (
        <div className="container-register">
        <Container >
            <section className="row  row-cols-1 row-cols-lg-2">
                <Container>
                  <FormRegister />
                </Container>
            </section>
        </Container>
        </div>
    )
}

export default Register