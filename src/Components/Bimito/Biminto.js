import React from 'react';
import './styles.css';


export default class extends React.Component {

    constructor(props){
        super(props);
        this.state={
            props : props
        }
    }

    render(){
        return (
            <div className="biminto">
                <h3>{this.state.props.text}</h3>
            </div>
        );
    }

}