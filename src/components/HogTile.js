import React from "react";

// Created a function to display details of an individual hog
function HogTile({ name, image, specialty, weight, highestmedalachieved, greased, isVisible, onToggleVisibility }) {
    return (
        <div className="ui two wide column" style={{ cursor: "pointer" }}>
            <h3>{name}</h3>
            <img src={image} alt={name} style={{ width: "35%" }} />

            {/* Render details based on isVisible prop */}
            {isVisible && (
                <div className="details">
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}</p>
                    <p>Highest Medal Achieved: {highestmedalachieved}</p>
                    <p>Greased: {greased ? "Yes" : "No"}</p>
                </div>
            )}

<br></br>
            {/* Button to toggle visibility */}
            <button onClick={onToggleVisibility}>
                {isVisible ? "Hide Hog Details" : "Show Hog Details"}
            </button>
        </div>
    );
}

// Exported the HogTile component as a default export
export default HogTile;
