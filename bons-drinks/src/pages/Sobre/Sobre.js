import React from 'react'
import { Container } from '../../componentes/BoaBebida/BoaBebida.style'
import Footer from '../../componentes/Footer/Footer'
import NavBar from '../../componentes/Nav/NavBar'
import { SobreWrapper } from './Sobre.style'

const Sobrenos = () => {
    return (
        <>
        <NavBar />
        <Container>
            <h1>Sobre nós</h1>
            <SobreWrapper>
                <img src="https://images.unsplash.com/photo-1517620430776-0ec904756579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt=""/>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
            </SobreWrapper>
        </Container>
        <Footer />
        </>
    )
}

export default Sobrenos