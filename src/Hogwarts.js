import React from "react"
import whoseHouse from "./houses/whoseHouse"
import Hufflepuff from "./houses/Hufflepuff";

function Hogwarts(){
    whoseHouse();
    return (
        <div>
            <Hufflepuff />
        </div>
    )
}

export default Hogwarts;