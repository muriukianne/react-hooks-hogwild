import React,{useState} from "react";

function HogTile({name,image,specialty,weight,greased,highestmedalachieved}){

const [showList,setshowList] = useState(false);

const handleTileClick = () =>{
    setshowList((prevshowList) => ! prevshowList);
}

return(
    <div className=" ui two wide column"
     onClick = {handleTileClick} style={{cursor : "pointer"}}>
        {/* displayed the name of the hog */}
        <h3>{name}</h3>
        {/* displayed the hogs image */}
        <img src={image} alt={name} style={{width : "35%"}}/>

        <div className="details">
            {/* displayed the hogs speciality,weight and highestmedalachieved */}
            <p>Specialty:{specialty}</p>
            <p>Weight:{weight}</p>
            <p>Highest Medal Achieved:{highestmedalachieved}</p>
            {/* displayed greased status using conditional statement if */}
            <p>Greased:{greased? "Yes" :"No"}</p>
            <br></br>

        </div>
         </div>
)
}

// exported the hogtile component as a default export
export default HogTile;