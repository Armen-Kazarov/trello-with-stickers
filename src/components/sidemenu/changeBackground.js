import React from 'react';
import '../../css/changebackground.css';

class ChangeBackground extends React.Component {
    constructor() {
        super();
        this.handleBackground = this.handleBackground.bind(this);
        this.body = document.querySelector('body');
    }

    handleBackground(value) {
        this.body.style.background = value;
    }

    render () {
        return (
            <div className="changeBackground">
                <div className="colorSelection darkBlueBg" onClick={()=>{this.handleBackground('#0009bc')}}>

                </div>
                <div className="colorSelection orangeBg" onClick={()=>{this.handleBackground('#ff9400')}}>

                </div>
                <div className="colorSelection darkGreenBg" onClick={()=>{this.handleBackground('#016403')}}>

                </div>
                <div className="colorSelection redBg" onClick={()=>{this.handleBackground('#ff0905')}}>

                </div>
                <div className="colorSelection purpleBg" onClick={()=>{this.handleBackground('#80047d')}}>

                </div>
                <div className="colorSelection pinkBg" onClick={()=>{this.handleBackground('#bf8e95')}}>

                </div>
                <div className="colorSelection lightGreenBg" onClick={()=>{this.handleBackground('#8aee89')}}>

                </div>
                <div className="colorSelection lighBlueBg" onClick={()=>{this.handleBackground('#99c0cc')}}>

                </div>
                <div className="colorSelection grayBg" onClick={()=>{this.handleBackground('#8d8d8d')}}>

                </div>
            </div>
        )
    }
}

export default ChangeBackground;