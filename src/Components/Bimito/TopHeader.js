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
            <div className="topheader">
                <div className="topheader">
                  <div className="text-header">
                    <h3> طبق اعلام بیمه مرکزی، با توجه به شیوع کرونا، دریافت نسخه فیزیکی بیمه‌نامه تا 15 اردیبهشت ضروری نیست</h3>
                  </div>
                </div>
            </div>
        );
    }

}