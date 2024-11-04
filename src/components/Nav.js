import React, { useState } from "react";

export default function HogCreator({ onAddHog }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [greased, setGreased] = useState(false);
  const [weight, setWeight] = useState('');
  const [highestMedal, setHighestMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newHog = {
      name,
      specialty,
      greased,
      weight:(weight),
      "highest medal achieved": highestMedal,
      image,
    };
    
    onAddHog(newHog);

    setName('');
    setSpecialty('');
    setGreased(false);
    setWeight('');
    setHighestMedal('');
    setImage('');
  };

  return (
    <form className="hog-form ui form" onSubmit={handleSubmit}>
      <div>
        <input 
          id="name"
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
	  <div>
        <input 
          id="image"
          type="text" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required
        />
      </div>
      <div>
        <input 
          id="specialty"
          type="text" 
          placeholder="Specialty" 
          value={specialty} 
          onChange={(e) => setSpecialty(e.target.value)} 
          required
        />
      </div>
      <div>
        <input 
          id="weight"
          type="number" 
          placeholder="Weight" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          required
        />
      </div>
      <div>
        <input 
          id="highestMedal"
          type="text" 
          placeholder="Highest Medal" 
          value={highestMedal} 
          onChange={(e) => setHighestMedal(e.target.value)} 
          required
        />
      </div>
      <div>
        <label>
          Greased:
          <input 
            type="checkbox" 
            checked={greased} 
            onChange={(e) => setGreased(e.target.checked)} 
            required
          />
        </label>
      </div>
      <button className="ui button" type="submit">Add Hog</button>
    </form>
  );
}

