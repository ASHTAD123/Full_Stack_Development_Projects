import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DetailsContext from "../context/DetailsArrayContext";


const AddMyCareerDetails = () => {
  
  const [careerDetails, setCareerDetails] = useState({});
  const { details, setDetails } = useContext(DetailsContext);
//  const navigator = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCareerDetails({ ...careerDetails, [name]: value });
  };

  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(",");
    setCareerDetails({ ...careerDetails, skills: skillsArray });
  };

  function saveDetails(e) {
  
    console.log("Save Details in AddMyCareerDetails ()");

    try {
        e.preventDefault();
        console.log("Career Details :");    
        console.log(careerDetails);    
        // setDetails({...careerDetails});    
        //setDetails( {...contactDetails,"careerDetails": careerDetails } );
      //  setDetails( {...details, careerDetails } );
        // console.log("Details Context :");    
        // console.log(details);
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  
  }

  return (
   <div>
    <form>
      <h1>Add Career Details</h1>

      <h2>Career Details</h2>
      <div>
        <label>Career Aim:</label>
        <input
          type="text"
          name="careeraim"
          value={careeraim}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Passion:</label>
        <input
          type="text"
          name="passion"
          value={passion}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Previous Company:</label>
        <input
          type="text"
          name="previouscompany"
          value={previouscompany}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={qualification}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Skills (comma-separated):</label>
        <input
          type="text"
          name="skills"
           value={skills.join(",")}
          onChange={handleSkillsChange}
        />
      </div>

      <button type="submit" onClick={saveDetails}>
        Submit
      </button>
    </form>

   </div> 
  );
};

export default AddMyCareerDetails;
