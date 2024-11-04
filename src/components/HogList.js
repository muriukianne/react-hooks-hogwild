import React, { useState } from "react";
import HogTile from "./HogTile";

// Created a function and passed the parameter hogs as a property
function HogList({ hogs }) {
    // State to manage visibility of each hog
    const [visibility, setVisibility] = useState({});

    // Function to toggle visibility for a specific hog
    const toggleVisibility = (hogName) => {
        setVisibility((prev) => ({
            ...prev,
            [hogName]: !prev[hogName], // Toggle visibility
        }));
    };

    return (
        <div>
            {/* Mapped each hog in the hog array */}
            {hogs.map((hog) => (
                // Only render the hog if it is visible
                visibility[hog.name] !== false && (
                    <HogTile
                        key={hog.name}
                        name={hog.name}
                        image={hog.image}
                        specialty={hog.specialty}
                        weight={hog.weight}
                        highestmedalachieved={hog.highestmedalachieved}
                        greased={hog.greased}
                        // Pass the visibility state and toggle function
                        isVisible={visibility[hog.name] !== undefined ? visibility[hog.name] : true} // Default to true if not defined
                        onToggleVisibility={() => toggleVisibility(hog.name)} // Toggle function
                    />
                )
            ))}
        </div>
    );
}

// Exported the HogList component as a default export
export default HogList;
