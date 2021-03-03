import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//CONTAINERS
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'

//COMPONENTS
import Layout from '../components/Layout'

//ESTILOS
import '../style/Global.scss'

// ---------------------------------------------------------------------------------

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/checkout' component={ Checkout } />
                    <Route exact path='/checkout/information' component={ Information } />
                    <Route exact path='/checkout/payment' component={ Payment } />
                    <Route exact path='/checkout/success' component={ Success } />
                    <Route  component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App