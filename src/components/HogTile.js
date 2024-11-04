import React,{useState} from "react";

// created a function to display details of an individual hog
function HogTile({hog}){

    // showlist is set to false so details are hidden by default
const [setshowList] = useState(false);


const handleTileClick = () =>{
    setshowList((prevshowList) => !prevshowList);
}



return(
    <div className=" ui two wide column"
    
     onClick = {handleTileClick} style={{cursor : "pointer"}}>
        {/* displayed the name of the hog */}
        <h3>{hog.name}</h3>
        {/* displayed the hogs image */}
        <img src={hog.image} alt={hog.name} style={{width : "35%"}}/>

        <div className="details">
            {/* displayed the hogs speciality,weight and highestmedalachieved */}
            <p>Specialty:{hog.specialty}</p>
            <p>Weight:{hog.weight}</p>
            <p>Highest Medal Achieved:{hog.highestmedalachieved}</p>
            {/* displayed greased status using conditional statement if */}
            <p>Greased:{hog.greased? "Yes" :"No"}</p>
            <br></br>

        </div>

         </div>
)
}

// exported the hogtile component as a default export
export default HogTile;
