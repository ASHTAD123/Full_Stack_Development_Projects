import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../context/DetailsArrayContext";

const AddMyDetailsForm = () => {
 
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const { setDetails } = useContext(DetailsContext);
 
  const personalDetails = {
    name,
    age,
    gender
  }
  
  const navigator = useNavigate();

    function saveDetails(e) {
   
    console.log("Save Details in AddMyDetails ()");
    e.preventDefault();

    try {
      console.log("TRY BLOCK");
      
      setDetails( personalDetails );
      
      navigator("/addMyContactDetails");

    } catch (e) {
      console.log("CATCH BLOCK");
      console.error(e);
    }
  }

  return (
    <div>
      AddMyDetails
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Age</label>
            <input
              type="text"
              placeholder="Your Age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Gender</label>
            <input
              type="text"
              placeholder="Your Gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            ></input>
          </div>

          <button onClick={saveDetails}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddMyDetailsForm;
