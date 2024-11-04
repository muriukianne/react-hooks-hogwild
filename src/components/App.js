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

	// used usestate to show hogs that are only greased
	const[greased,setGreased] = useState(false)

	// created a function to sort hogs by name
    const filteredAndsortedHogs = [...hogs]
	.filter(hog => !greased || hog.greased)
	
	.sort((a,b) =>{
		// used conditional operators depending on the hogs sorting criteria
		// used logical operator logical and  to sort the hogs by name
		if(sort ==="name"){
			return a.name.localeCompare(b.name)}
			else{
				// created arithmetic operators to calculate the weight in order to sort it4
				return a.weight-b.weight}

			}
		)
	
    //   created an anonymous arrow function to sort the hogs when the dropdown changes
	const handleSortChange = (event) => {
		setSort(event.target.value)
	}
    //   created an anonymous arrow function to filter the hogs based on their greased state
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
					{/* created options to sort hogs by name or weight */}
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
				<br></br>
				<br></br>
            {/* created a label to show only greased hogs */}
			{/* used htmlfor attribute to link the label to greased input */}
            <label  htmlFor="greased"> Greased Hogs</label>
			<br></br>
			<input
			type="checkbox"
			id="greased"
			// used checked to show hogs that are in greased state
			checked={greased}
			// used onchange to track and respond to greasedhogs when the check box is clicked
			onChange={handleGreasedToggle}
			/>

			
            </div>
			<br></br>
			{/* passed the filtered and sorted hog list to the Hoglist component */}
			<HogList hogs={filteredAndsortedHogs}/>
			
		</div>
	);
}
// exporting the app component as a default export
export default App;

console.log(Anne)
