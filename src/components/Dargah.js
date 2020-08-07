import React from 'react';
import './styles.css';
import mobilee from '../assets/images/mobilee.svg'

// دقیقا مشابه با فایل Biminto.js که گفتم این هم همین طور

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