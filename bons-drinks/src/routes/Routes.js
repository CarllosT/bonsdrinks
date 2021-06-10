import React from 'react'
import { Route, Switch } from 'react-router'
import AboutUs from '../pages/Sobre/Sobre'
import Contact from '../pages/Contato/Contato'
import Drinks from '../pages/Bebidas/Bebidas'
import Home from '../pages/Home'
import OurTime from '../pages/Time/Time'

const Routes = () => {
    return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/bebidas">
            <Drinks />
        </Route>
        <Route path="/sobrenos">
            <AboutUs />
        </Route>
        <Route path="/nossotime">
            <OurTime />
        </Route>
        <Route path="/contato"> 
            <Contact />
        </Route>
    </Switch>
    )
}

export default Routes