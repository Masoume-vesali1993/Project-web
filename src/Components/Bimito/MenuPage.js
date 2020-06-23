import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from "react-router-dom";
import BemeAtashSoze from '../pages/BemeAtashSoze';
import BemeMosaferaty from './Components/pages/BemeMosaferaty';
import BemeMasoliatPezeshgan from './Components/pages/BemeMasoliatPezeshgan';
import BemeShaghseSales from './Components/pages/BemeShaghseSales';
import BemeBadane from '../pages/BemeBadane';
import BemeMotor from '../pages/BemeMotor';
import Bemeomr from '../pages/Bemeomr';
import BemeHavadeseAnfrade from '../pages/BemeHavadeseAnfrade';
import DarmanTakmily from '../pages/DarmanTakmily';
import BemeZelzele from '../pages/BemeZelzele';
import Blog from '../pages/Blog';
import ComponyBime from '../pages/ComponyBime';
import LoginUsing from '../pages/LoginUsing';
import SamaneBazaryabiBimito from './Components/pages/SamaneBazaryabiBimito';

      



class Menu extends React.Component {
  render() {
    return (
      <div>
          <Switch>
                <Route exact path="BemeAtashSoze" component={BemeAtashSoze} />
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
      </div>

    );
  }
}

export default Menu;