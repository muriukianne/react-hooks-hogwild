import React from "react";
// imported the hogtile component to display each hog
import HogTile from "./HogTile"

// created a function and passed the parameter hogs as a property
function HogList({hogs}){
    return(
        <div >
            {/* mapped eac h hog in the hog array */}
            {hogs.map((hog) => (
                <HogTile 
                // passed a unique key for the hog tile based on each hog name
                key={hog.name} 
                // passed name,image,specialty,weight,highestmedalachieved and greased as a prop
                name ={hog.name}
                image={hog.image} 
                specialty={hog.specialty}
                weight={hog.weight}
                highestmedalachieved={hog.highestmedalachieved}
                greased={hog.greased}
               

                 />
            )
          )}
        </div>
    )
}

// exported the hoglist component as a default export
export default HogList