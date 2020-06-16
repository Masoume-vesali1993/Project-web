import React,{Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import MainPart from './Components/Bimito/MainPart';
// import MenuPart from './Components/Bimito/MenuPart';
import Form from './Components/Bimito/Form'
import Index from './Components/Bimito/Index';
import Dargah from './Components/Bimito/Dargah';
import Application from './Components/Bimito/Application';
import Footer from './Components/Bimito/Footer';
import Bimito from './Components/Bimito/Biminto';
import EndFooer from './Components/Bimito/EndFooer';
import TopHeader from './Components/Bimito/TopHeader';
import Scroll from './Components/Bimito/Scroll';
import { Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import BemeAmval from './Components/pages/BemeAmval';
import BemeAshkhas from './Components/pages/BemeAshkhas';
import BemeMasoliatPezeshgan from './Components/pages/BemeMasoliatPezeshgan';
import BemeVasaiNaglie from './Components/pages/BemeVasaiNaglie';
import Blog from './Components/pages/Blog';
import ComponyBime from './Components/pages/ComponyBime';
import LoginUsing from './Components/pages/LoginUsing';
import SamaneBazaryabiBimito from './Components/pages/SamaneBazaryabiBimito';




class App extends Component {
  render() {
    return (
    <div>

       {/* ************************************************************************ ُ*/}
          <TopHeader />

          <Navbar />

          
          <Route exact path="/bemeAmval" component={BemeAmval} />
          <Route exact path="/bemeAshkhas" component={BemeAshkhas} />
          <Route exact path="/BemeMasoliatPezeshgan" component={BemeMasoliatPezeshgan} />
          <Route exact path="/BemeVasaiNaglie" component={BemeVasaiNaglie} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/ComponyBime" component={ComponyBime} />
          <Route exact path="/LoginUsing" component={LoginUsing} />
          <Route exact path="/SamaneBazaryabiBimito" component={SamaneBazaryabiBimito} />

          <MainPart />

          <Form/>
          
          <Index />

          <Dargah />
         
          <Application />

          <Bimito />
                
          <Footer />
                  
          <EndFooer />
          
          <Scroll />
                 
    </div>

    );
  }
};

  export default App;



