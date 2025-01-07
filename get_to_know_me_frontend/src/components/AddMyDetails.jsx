import React from 'react';
import { useState } from 'react';
import {addDeatils} from '../services/myService'
import { useNavigate } from 'react-router-dom';

const AddMyDetails = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const navigator = useNavigate();

function saveDetails(e) {
  e.preventDefault();
  const details= {name,age,gender}
  console.log(details);
  
  addDeatils(details).then( (response) =>{
  console.log(response.data);
  navigator('/details')
  
})

}

return (
    <div>
      AddMyDetails
      <div>
        <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your Name" name="name" value={name} onChange={ (e)=> setName(e.target.value)}></input>
              </div>

              <div>
                <label>Age</label>
                <input type="text" placeholder="Your Age" name="age" value={age} onChange={ (e)=> setAge(e.target.value)}></input>
              </div>

              <div>
                <label>Gender</label>
                <input type="text" placeholder="Your Gender" name="gender" value={gender} onChange={ (e)=> setGender(e.target.value)}></input>
              </div>

              <button onClick={saveDetails}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddMyDetails;
