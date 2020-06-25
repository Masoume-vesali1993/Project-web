import React from 'react';
// import TopHeader from './TopHeader';
// import Navbar from '../Navbar';
import MainPart from './MainPart';
import Form from './Form';
import Index from './Index';
import Dargah from './Dargah';
import Application from './Application';
import Bimito from './Biminto';

import { Switch, Route } from "react-router-dom";
import BemeAtashSoze from '../pages/BemeAtashSoze';
import BemeMosaferaty from '../pages/BemeMosaferaty';
import BemeMasoliatPezeshgan from '../pages/BemeMasoliatPezeshgan';
import BemeShaghseSales from '../pages/BemeShaghseSales';
import BemeBadane from '../pages/BemeBadane';
import BemeMotor from '../pages/BemeMotor';
import Bemeomr from '../pages/Bemeomr';
import BemeHavadeseAnfrade from '../pages/BemeHavadeseAnfrade';
import DarmanTakmily from '../pages/DarmanTakmily';
import BemeZelzele from '../pages/BemeZelzele';
import Blog from '../pages/Blog';
import ComponyBime from '../pages/ComponyBime';
import LoginUsing from '../pages/LoginUsing';
import SamaneBazaryabiBimito from '../pages/SamaneBazaryabiBimito';



class App extends React.Component {
  render() {
    return (
      <div> 
        {/* <TopHeader />   */}

        {/* <Navbar />  */}
          <Switch>

            <Route exact path="/BemeAtashSoze" component={BemeAtashSoze} />
            {/* <Route exact path="/bemeAshkhas" component={BemeAshkhas} /> */}
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

          <MainPart />

          <Form />

          <Index />

          <Dargah />

          <Application />

          <Bimito />

      </div>

    );
  }
}

export default App;