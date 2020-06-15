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
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import TopHeader from './Components/Bimito/TopHeader';
import Scroll from './Components/Bimito/Scroll';
import Navbar from './Components/Bimito/Navbar';
import BemeAmval from './Components/pages/BemeAmval';
import BemeAshkhas from './Components/pages/BemeAshkhas';
import BemeMasoliat from './Components/pages/BemeMasoliat';
import BemeVasaiNaglie from './Components/pages/BemeVasaiNaglie';
import Blog from './Components/pages/Blog';
import ComponyBime from './Components/pages/ComponyBime';
import LoginUsing from './Components/pages/Login-Using';
import SamaneBazaryabiBimito from './Components/pages/SamaneBazaryabiBimito';


import Home from "./Components/Hom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";





class App extends Component {
  render() {
    return (
    <div>

     <Home />
     <About />
     <Contact />
     <Projects />

       {/* ************************************************************************ ُ*/}
          <TopHeader />

          <BrowserRouter>
          <div>
            <Route path="/" component={Navbar} />

            <Switch>
              <Route path="/BemeAshkhas" render={(props) => <BemeAshkhas {...props} onPostCreated={this.addNewPost} />} /> 
              <Route path="/BemeAmval" exact render={(props) => <BemeAmval {...props} posts={this.state.posts} x={true} /> } />
              <Route path="/Blog" render={(props) => <h1>blog list</h1> } />
              <Route path="/BemeMasoliat" render={(props) => <BemeMasoliat post={this.findPostById(props.match.params.id)} /> } />
              <Route path="/BemeVasaiNaglie" render={(props) => <BemeVasaiNaglie post={this.findPostById(props.match.params.id)} /> } />
              <Route path="/BemeAshkhas" render={(props) => <BemeAshkhas {...props} onPostCreated={this.addNewPost} />} /> 
              <Route path="/ComponyBime" render={(props) => <ComponyBime {...props} onPostCreated={this.addNewPost} />} /> 
              <Route path="/LoginUsing" render={(props) => <LoginUsing {...props} onPostCreated={this.addNewPost} />} /> 
              <Route path="/SamaneBazaryabiBimito" render={(props) => <SamaneBazaryabiBimito {...props} onPostCreated={this.addNewPost} />} /> 
            </Switch>
            
          </div>
       </BrowserRouter>

          {/* <MenuPart/> */}

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



