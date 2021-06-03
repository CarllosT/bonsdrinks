import React from 'react'
import { Container } from '../AboutUs/style'
import { OurTimeWrapper } from './style'
import NavBar from '../../componentes/Nav'
import Footer from '../../componentes/Footer'

const OurTime = () => {
    return (
        <>
        <NavBar />
        <Container>
            <OurTimeWrapper>
                <div>
                <img src="https://avatars.githubusercontent.com/u/51389902?v=4" alt="Imagem do integrante do time" />
                <h5>Carlos</h5>
                <p>Desenvolvedor Back-end</p>
                </div>
                <div>
                <img src="https://avatars.githubusercontent.com/u/51389902?v=4" alt="Imagem do integrante do time" />
                <h5>Trajano</h5>
                <p>Desenvolvedor Front-end</p>
                </div>
                <div>
                <img src="https://avatars.githubusercontent.com/u/51389902?v=4" alt="Imagem do integrante do time" />
                <h5>CarllosT</h5>
                <p>Desenvolvedor Fullstack</p>
                </div>
            </OurTimeWrapper>
        </Container>
        <Footer />
        </>
    )
}

export default OurTime
