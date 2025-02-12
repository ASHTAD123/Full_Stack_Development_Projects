import React, { useEffect, useState } from "react";
import { listDetails } from "../services/myService";
import { updateMyDetails } from "../services/myService";


const PersonalDetailsUpdateForm = () => {
  
  const [readOnlyData, setReadOnlyData] = useState(['']);
  const [age, setAge] = useState('');
  const [id, setUserInputId] = useState('');
  const data = {id,age};
  
  useEffect(() => {
    
    listDetails()
      .then((response) => {
        setReadOnlyData(response.data);     
      })
      .catch((Err) =>  console.error(Err));
  },[]
  );
  const handleSubmit = (e) => {
  
    e.preventDefault();
    updateMyDetails(id,data)
  };
 
  return (

    <div>
  
      <h1>Update Personal Details</h1>
      <form>
        <div> <label><h2>Name : </h2> { readOnlyData[0].name } </label> </div>

        <div>
        <div> <label><h2>Gender : </h2> { readOnlyData[0].gender } </label> </div>
          <h3 name="gender" />
        </div>

        <div>
          <label>Age : </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br></br>

        <div>
          <label>Id to update : </label>
          <input
            type="number"
            name="userid"
            value={id}
            onChange={(e) => setUserInputId(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default PersonalDetailsUpdateForm;
