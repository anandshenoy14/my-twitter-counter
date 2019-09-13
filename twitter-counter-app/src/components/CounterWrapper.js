import React from 'react';
import './CounterWrapper.css'
class CounterWrapper extends React.Component{
    constructor(props){
        super(props)
    }
    slide(slider,counter){
        slider.style = `transform : translateY(-${counter * 18}px)`
    }
    componentDidUpdate(prevProps,prevState){
        const slider = document.getElementsByClassName('sliding-wrapper')[0]
        const current = document.getElementsByClassName('sliding-wrapper--current')[0]
        const next = document.createElement('div')
        const counter = document.createElement('div')
        counter.classList.add('counter')
        counter.innerHTML = prevProps.value + 1;
        next.classList.add('sliding-wrapper--next')
        next.appendChild(counter)
        slider.appendChild(next)
        this.slide(slider,prevProps.counter + 1)
        slider.addEventListener('transitionend',(e)=>{
            current.classList.add('hidden-current')
            current.classList.remove('sliding-wrapper--current')
            next.classList.add('sliding-wrapper--current')
            next.classList.remove('sliding-wrapper--next')
        })
    }
    render(){
        return (
        <div className="counter-wrapper">
            <div data-counter={this.props.counter} className="sliding-wrapper">
                <div className="sliding-wrapper--current">
                    <div className="counter">
                        {this.props.value}
                    </div>
                </div>
            </div>   
        </div>)
    };
}

export default CounterWrapper;
