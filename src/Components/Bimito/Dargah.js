import React from 'react';
import './styles.css';
import mobilee from './Img/mobilee.svg'



export default class extends React.Component {

    constructor(props){
        super(props);
        this.state={
            props : props
        }
    }

    render(){
        return (
            <div className="dargah">
                <div className="img-bank">

                    {<img alt="example" src={mobilee} />} 

                </div>
            </div>
        );
    }

}