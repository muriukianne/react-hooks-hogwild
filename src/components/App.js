import React, { useState } from "react";
import Nav from "./Nav";
// imported hoglist component to display list of hogs
import HogList from "./HogList"
// imported hogs data from porkers_data.js
import hogs from "../porkers_data";

function App() {
	// used usestate to hold the array of hogs that was declared in the porkers_data.js
	const [hogsData]= useState(hogs);
    //used usestate tp keep track of sorting criteria 
	const [sort,setSort] = useState("name")

	const[greased,setGreased] = useState(false)

	// created a function to sort hogs by name
    const filteredAndsortedHogs = [...hogs]
	.filter(hog => !greased || hog.greased)
	
	.sort((a,b) =>{
		if(sort ==="name"){
			return a.name.localeCompare(b.name)}
			else{
				return a.weight-b.weight}

			}
		)
	
	const handleSortChange = (event) => {
		setSort(event.target.value)
	}

	const handleGreasedToggle = (event) => {
		setGreased(event.target.value)
	}

	return (
		<div className="App">
			{/* Rendered the navigation component */}
			<Nav />
			<h1>HogWild Winning Pigs</h1>
	        {/* Rendered the list of hogs by passing hogs as a prop */}
			
			<div  >
                {/* Dropdown for selecting sorting criteria */}
                <label htmlFor="sort">Sort Hogs By:   </label>
                <select id="sort" value={sort} onChange={handleSortChange}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
				<br></br>
				<br></br>

            <label  htmlFor="greased"> Greased Hogs</label>
			<br></br>
			<input
			type="checkbox"
			id="greased"
			checked={greased}
			onChange={handleGreasedToggle}
			/>

			
            </div>
			<br></br>
			
			<HogList hogs={filteredAndsortedHogs}/>
			
		</div>
	);
}
// exporting the app component as a default export
export default App;
