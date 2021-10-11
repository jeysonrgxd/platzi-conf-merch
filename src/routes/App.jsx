import React from 'react'

import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import NotFound from '../containers/NotFound'
import Success from '../containers/Sucess'
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInicialState';


const App = () => {

   // utilizamos el custom hook para poder obtener nuestro estado con sus acciones de cambio (funciones) y se lo pasamos a nuestro provider
   const initialState = useInitialState()
   // const isEmpty = Object.keys(initialState).length

   // if(isEmpty>=4)

   return (
      <AppContext.Provider value={initialState} >
         <Router>
            <Layout>
               <div>
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/checkout" component={Checkout} />
                     <Route exact path="/checkout/information" component={Information} />
                     <Route exact path="/checkout/payment" component={Payment} />
                     <Route exact path="/checkout/success" component={Success} />
                     <Route component={NotFound} />
                  </Switch>
               </div>
            </Layout>
         </Router>
      </AppContext.Provider>
   )
}


export default App
