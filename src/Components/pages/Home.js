import React from "react";
// import Navbar from "../Navbar";
// import Footer from "../Bimito/Footer";

export default class extends React.Component {
constructor(props){
    super(props);
    this.state={
        props : props
    }
}

render(){
    return (
        <div>
            {/* <Navbar /> */}
                {this.props.children}
               <h1>Blog</h1>
            {/* <Footer /> */}
        </div>
    );
}

}