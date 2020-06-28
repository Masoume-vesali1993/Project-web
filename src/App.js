import React,{Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Footer from './Components/Bimito/Footer';
import EndFooer from './Components/Bimito/EndFooer';
import TopHeader from './Components/Bimito/TopHeader';
import Navbar from './Components/Navbar';
import { Switch, Route } from "react-router-dom";
import BemeAtashSoze from './Components/pages/BemeAtashSoze';
import BemeMosaferaty from './Components/pages/BemeMosaferaty';
import BemeMasoliatPezeshgan from './Components/pages/BemeMasoliatPezeshgan';
import BemeShaghseSales from './Components/pages/BemeShaghseSales';
import BemeBadane from './Components/pages/BemeBadane';
import BemeMotor from './Components/pages/BemeMotor';
import Bemeomr from './Components/pages/Bemeomr';
import BemeHavadeseAnfrade from './Components/pages/BemeHavadeseAnfrade';
import DarmanTakmily from './Components/pages/DarmanTakmily';
import BemeZelzele from './Components/pages/BemeZelzele';
import Blog from './Components/pages/Blog';
import ComponyBime from './Components/pages/ComponyBime';
import LoginUsing from './Components/pages/LoginUsing';
import SamaneBazaryabiBimito from './Components/pages/SamaneBazaryabiBimito';
import MenuPage from './Components/Bimito/MenuPage';


class App extends Component {
  render() {
    return (
    <div>

       {/* ************************************************************************ ُ*/}
          <TopHeader />

          <Navbar />

          {/* <MenuPage /> */}

          <Switch>
             <Route path="/"  component={MenuPage} /> 
            <Route exact path="/BemeAtashSoze" component={BemeAtashSoze} />
            <Route exact path="/bemeMasoliatPezeshgan" component={BemeMasoliatPezeshgan} />
            <Route exact path="/bemeShaghseSales" component={BemeShaghseSales} />
            <Route exact path="/bemeBadane" component={BemeBadane} />
            <Route exact path="/BemeMotor" component={BemeMotor} />
            <Route exact path="/bemeMosaferaty" component={BemeMosaferaty} />
            <Route exact path="/bemeomr" component={Bemeomr} />
            <Route exact path="/BemeHavadeseAnfrade" component={BemeHavadeseAnfrade} />
            <Route exact path="/DarmanTakmily" component={DarmanTakmily} />
            <Route exact path="/BemeZelzele" component={BemeZelzele} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/ComponyBime" component={ComponyBime} />
            <Route exact path="/LoginUsing" component={LoginUsing} />
            <Route exact path="/SamaneBazaryabiBimito" component={SamaneBazaryabiBimito} />
            
          </Switch>
           
          <Footer />
                  
          <EndFooer />
                 
    </div>

    );
  }
};

  export default App;



