import React, { useState } from "react";
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'

import taj from './tajmahal.jpg'
function Cards(props){
     let [display , setDisplay] = useState("des");
     let [hidcard,setHidcard] = useState("maindiv");
     function displayMore() {
          setDisplay(prev => prev === "des" ? "des2" : "des");
        }
          function hidCard() {
               setHidcard("maindiv2"); // directly hide
               props.forceCheck();     // notify App to recheck
          }

     
    return (
    <>
          <div className={hidcard}>
               <div className="imag"><img src={props.image} alt="" width="100%" height="100%" /></div>
               <div className="price">
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} /></div>
                    <div className="priVal">{props.charges}</div>
               </div>
               <div className="Name">{props.name}</div>
               <div>
                    <div className={display}>{props.about}</div>
                    <div onClick={displayMore} className="readmore">Read More</div>
               </div>
               <button onClick={hidCard} className="but">Not Interested</button>
          </div>
     </>)

}
export default Cards;