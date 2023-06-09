
import axios from 'axios';
import {useState,useEffect} from 'react'

function AddPets(){
    const [pets, setPets] = useState([]);
    const [newPetName, setNewPetName] = useState('');
    const [newPetBreed, setNewPetBreed] = useState('');
    
  
    const handleAddPet = async () => {
      const result = await axios.post('http://127.0.0.1:9292/pets/addpet', {
        name: newPetName,
        breed: newPetBreed,
        
      });
      setPets([...pets, result.data]);
      setNewPetName('');
      setNewPetBreed('');
      
    };
  
    return(
        <>
        <div>
        <h2>Add a new pet:</h2>
        <form className="forms" onSubmit={handleAddPet}>
          <label htmlFor="newPetName">Name:</label>
          <input type="text" id="newPetName" value={newPetName} onChange={(e) => setNewPetName(e.target.value)} />
          <label htmlFor="newPetBreed">Breed:</label>
          <input type="text" id="newPetBreed" value={newPetBreed} onChange={(e) => setNewPetBreed(e.target.value)} />
         
          <button type="submit">Add New Pet</button>
        </form>
      </div>
        </>
    )
}

export default AddPets;