import { Container} from 'react-bootstrap'
import { FormRegister } from '../Components/formRegister/FormRegister'

function Register() {

  
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