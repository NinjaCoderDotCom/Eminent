import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Classes from './Pages/Classes';
import Primary from './SubPages/Primary';
import Middle from './SubPages/Middle';
import Senior from './SubPages/Senior';
import SeniorSecondary from './SubPages/SeniorSec';

class Markup extends Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/gallery' component={Gallery} />
                    <Route exact path='/classes/primary' component={Primary} />
                    <Route exact path='/classes/middle' component={Middle} />
                    <Route exact path='/classes/senior' component={Senior} />
                    <Route exact path='/classes/senior-secondary' component={SeniorSecondary} />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Markup;