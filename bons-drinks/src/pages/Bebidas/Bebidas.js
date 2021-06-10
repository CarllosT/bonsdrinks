import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import BoaBebida from '../../componentes/BoaBebida/BoaBebida'
import BuscarBebida from '../../componentes/BuscarBebida/BuscarBebida'
import NavBar from '../../componentes/Nav/NavBar'
import { Container } from './Bebidas.style'

const Bebidas = () => {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Container>
                    <h1>Drinks</h1>
                    <Link to="/bebidas/boaBebida"><p>Bebidas Populares</p></Link>
                    <Link to="/bebidas/buscarBebida"><p>Buscar Bebidas</p></Link>
                </Container>
                <Switch> 
                    <Route exact path="/bebidas/boabebida" component={BoaBebida} />  
                    <Route exact path="/bebidas/buscarbebidas" component={BuscarBebida} />  
                </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Bebidas