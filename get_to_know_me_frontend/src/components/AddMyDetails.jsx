import React from "react";
import { useState } from "react";
import { addDetails } from "../services/myService";
import { useNavigate } from "react-router-dom";
import {REST_API_BASED_POST_URL} from '../services/myService'
import axios from 'axios'

const AddMyDetails = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  
  const navigator = useNavigate();

  async function saveDetails(e) {
    
    console.log("SAVE DETAILS ()")
   
    e.preventDefault();
    const details = { name, age, gender };
    console.log(details);

    try {
      console.log("TRY BLOCK")
      
      const response = await axios.post(REST_API_BASED_POST_URL, details, {
        headers: {
          'Authorization': 'Bearer your-token',
          'Content-Type': 'application/json'
        }
      });
       console.log("Response", response);
    
      } catch (e) {
      console.log("CATCH BLOCK")
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

export default AddMyDetails;
