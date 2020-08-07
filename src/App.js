import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Footer from './components/Footer';
import EndFooer from './components/EndFooer';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import BemeAtashSoze from './pages/BemeAtashSoze';
import BemeMosaferaty from './pages/BemeMosaferaty';
import BemeMasoliatPezeshgan from './pages/BemeMasoliatPezeshgan';
import BemeShaghseSales from './pages/BemeShaghseSales';
import BemeBadane from './pages/BemeBadane';
import BemeMotor from './pages/BemeMotor';
import Bemeomr from './pages/Bemeomr';
import BemeHavadeseAnfrade from './pages/BemeHavadeseAnfrade';
import DarmanTakmily from './pages/DarmanTakmily';
import BemeZelzele from './pages/BemeZelzele';
import Blog from './pages/Blog';
import ComponyBime from './pages/ComponyBime';
import LoginUsing from './pages/LoginUsing';
import SamaneBazaryabiBimito from './pages/SamaneBazaryabiBimito';
import Home from './pages/Home';
import MainPart from './components/MainPart';
import Form from './components/Form';
import Index from './components';
import Dargah from './components/Dargah';
import Application from './components/Application';
import Bimito from './components/Biminto';
import Scroll from './components/Scroll'

import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <div>
                <TopHeader/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bemeAtashSoze" component={BemeAtashSoze}/>
                    <Route path="/bemeMasoliatPezeshgan" component={BemeMasoliatPezeshgan}/>
                    <Route path="/bemeShaghseSales" component={BemeShaghseSales}/>
                    <Route path="/bemeBadane" component={BemeBadane}/>
                    <Route path="/bemeMotor" component={BemeMotor}/>
                    <Route path="/bemeMosaferaty" component={BemeMosaferaty}/>
                    <Route path="/bemeomr" component={Bemeomr}/>
                    <Route path="/bemeHavadeseAnfrade" component={BemeHavadeseAnfrade}/>
                    <Route path="/darmanTakmily" component={DarmanTakmily}/>
                    <Route path="/bemeZelzele" component={BemeZelzele}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/componyBime" component={ComponyBime}/>
                    <Route path="/loginUsing" component={LoginUsing}/>
                    <Route path="/samaneBazaryabiBimito" component={SamaneBazaryabiBimito}/>
                </Switch>
                <MainPart/>
                <Form/>
                <Index/>
                <Scroll/>
                <Dargah/>
                <Application/>
                <Bimito/>
                <Footer/>
                <EndFooer/>
            </div>
        );
    }
}

export default App;

  



