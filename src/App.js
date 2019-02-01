import React, {Component, Fragment} from 'react';

import './App.css';
import Header from "./components/Header";
import Error404 from "./components/Error404";
import HeroList from "./components/HerosList";
import SingleHeroPage from "./components/SingleHeroPage";

import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                    <Header
                        title="The Rick and Morty API"
                        sub_title="Hey, did you ever want to hold a Terry fold?"
                        sub_title_hidden="&nbsp;&nbsp;&nbsp;I got one right here, grab my terry flap&nbsp;&nbsp;&nbsp;"
                    />
                    <Switch>
                        <Route path="/" exact component={HeroList}/>
                        <Route path="/personage/:id" component={SingleHeroPage}/>
                        <Route path="/page/:pagenum" component={HeroList}/>
                        <Route path='*' exact component={Error404}/>
                    </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
