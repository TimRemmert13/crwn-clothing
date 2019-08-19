import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import HomePage from '../pages/homepage/homepage.component.jsx'
import ShopPage from '../pages/shop/shop.component.jsx'

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    )
}

export default App