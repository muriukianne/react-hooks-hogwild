import React, { useState } from "react";
import Nav from "./Nav";
// imported hoglist component to display list of hogs
import HogList from "./HogList"
// imported hogs data from porkers_data.js
import hogs from "../porkers_data";

function App() {
	// used usestate to hold the array of hogs that was declared in the porkers_data.js
	const [hogData, setHogsData] = useState(hogs)
    //used usestate tp keep track of sorting criteria 
	const [sort,setSort] = useState("name")

	// used usestate to show hogs that are only greased
	const[greased,setGreased] = useState(false)

	const [newHog, setNewHog] = useState({
        name: "",
        image: "",
        specialty: "",
        weight: "",
        highestmedalachieved: "",
        greased: false,
    });


	 //   created an anonymous arrow function to sort the hogs when the dropdown changes
	 const handleSortChange = (event) => {
		setSort(event.target.value)
	}

	 //   created an anonymous arrow function to filter the hogs based on their greased state
	 const handleGreasedToggle = (event) => {
		setGreased(event.target.value)
	}

	const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setNewHog((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

	const handleAddHog = (event) => {
        event.preventDefault();

        if (newHog.name && newHog.image && newHog.specialty && newHog.weight) {
            setHogsData((prevHogs) => [...prevHogs, newHog]);
            setNewHog({
                name: "",
                image: "",
                specialty: "",
                weight: "",
                highestmedalachieved: "",
                greased: false,
            });
        }
    };

		
   // Filtering and sorting the hogs based on the current criteria
   const filteredAndSortedHogs = hogData
   .filter(hog => !greased || hog.greased)
   .sort((a, b) => {
	   return sort === "name"
		   ? a.name.localeCompare(b.name)
		   : a.weight - b.weight;
   });


	
   
  

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

			<form onSubmit={handleAddHog}>
                <h2>Add a New Hog</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newHog.name}
                    onChange={handleInputChange}
                    required
                />
				<br></br>
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={newHog.image}
                    onChange={handleInputChange}
                    required
                />
				<br></br>
                <input
                    type="text"
                    name="specialty"
                    placeholder="Specialty"
                    value={newHog.specialty}
                    onChange={handleInputChange}
                    required
                />
				<br></br>
                <input
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={newHog.weight}
                    onChange={handleInputChange}
                    required
                />
				<br></br>
                <input
                    type="text"
                    name="highestmedalachieved"
                    placeholder="Highest Medal Achieved"
                    value={newHog.highestmedalachieved}
                    onChange={handleInputChange}
                    required
                />
				<br></br>
                <label>
                    Greased:
                    <input
                        type="checkbox"
                        name="greased"
                        checked={newHog.greased}
                        onChange={handleInputChange}
                    />
					<br></br>
                </label>
                <button type="submit">Add Hog</button>
            </form>

             <br></br>

			{/* passed the filtered and sorted hog list to the Hoglist component */}
			<HogList hogs={filteredAndSortedHogs}/>
			
		</div>
	);
}
// exporting the app component as a default export
export default App;




