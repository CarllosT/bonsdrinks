import React from 'react'
import Form from '../../componentes/Form/Form'
import { FormDiv } from '../../componentes/Form/Form.style'
import NavBar from '../../componentes/Nav/NavBar'
import Footer from '../../componentes/Footer/Footer'
import { ContainerContact } from './Contato.style'

const Contato = () => {
    return (
        <>
        <NavBar />
        <ContainerContact>
        <h1 >Entre em contato!</h1>
        <FormDiv>
            <Form />
        </FormDiv>
        </ContainerContact>
        <Footer />
        </>
    )
}

export default Contato
