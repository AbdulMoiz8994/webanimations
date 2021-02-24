import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import cloudPng from "../Images/cloud.png" 

export const Cloud = () => {
   const {ref,playState}=useWebAnimations({
       //The {ref} implement all these keyframes and timing in img and whcih we give below
       keyframes:[
           {transform: 'translate(100%, 0)'},
           {transform: 'translate(-100%,0)'}
       ],
         timing:{
          duration: 5000,
          iterations: Infinity,
            }


   }) 
    return (
        <div  ref={ref}>
        <img src={cloudPng} alt="Cloud"/>
          {console.log(playState)}
         <img src={cloudPng} alt="Cloud2"/> 
        </div>
    )
}
