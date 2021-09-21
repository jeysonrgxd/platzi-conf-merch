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

const App = () => (
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
)


export default App
