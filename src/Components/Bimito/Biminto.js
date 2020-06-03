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
                {/* <h3>{this.state.props.text}</h3> */}
                <div className="biminto">
                  <h2>بیمنتو چیست؟</h2>
                  <p>از طریق اپلیکیشن و وب‌سایت بیمیتو هر لحظه و هر جایی که هستی می‌تونی به صورت آنلاین بیمه بخری. فقط کافیه به چند تا سوال ساده، جواب بدی تا بتونی کیفیت و قیمت ده‌ها شرکت بیمه مورد تایید بیمه مرکزی رو مقایسه کنی. آخر سر بیمه‌ای که به نظرت مناسب‌تر هست رو انتخاب کنی و بخری و در خونه تحویل بگیری.</p>
                </div>
            </div>
        );
    }

}