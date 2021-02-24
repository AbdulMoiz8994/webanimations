import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import Planes from '../Images/plane.gif'

export const Plane = () => {
    const {ref}=useWebAnimations({
        keyframes:[
            {transform: 'translate(-100%,0)'},
            {transform: 'translate(200%,72%)'},
            {transform: 'translate(1000px,200px)'},
            {transform: 'translate(1200px,200px)'},
            {transform: 'translate(1420px,200px)'},
            {transform: 'translate(1800px,200px)'},


        ],
        timing:{
            duration: 6000,
            iterations: Infinity,
        }
    })

    return (
        <div>
            <img className="plane" src={Planes} alt="plan" ref={ref}/>

        </div>
    )
}
