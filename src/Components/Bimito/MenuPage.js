import React from 'react';
import TopHeader from './TopHeader';
import Navbar from '../Navbar';
import MainPart from './MainPart';
import Form from './Form';
import Index from './Index';




class App extends React.Component {
  render() {
    return (
      <div> 
        <TopHeader />  
        <Navbar /> 
        <MainPart />
        <Form/>
        <Index/>

      </div>

    );
  }
}

export default App;