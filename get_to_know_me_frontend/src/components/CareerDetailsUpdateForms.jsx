import React from "react";
import { useState } from "react";
import { updateCareerDetails } from "../services/myService";

/* 
1. Try to handle the functionality in single or minimal functions
2. try using the oop's concept (sting and array, current salary int, object )
  Class
    -> string
    -> comma seperated stirng 
    -> object
     -> array
    -> number
    -> floating point number

    Class process the input type 
    Class returns an object 
*/
const CareerDetailsUpdateForm = () => {
  
  const [careerDetails, setCareerDetails] = useState([]);
  const [contactName, setContactName] = useState();
  const [skills, setSkillsDetails] = useState([]);

  const handleSkillsDetailChange = (e) => {
  
    const { value } = e.target;
    let skillsArray;
   
    if (value && !value.includes(",")) {
      skillsArray = [value];
    } else {
      skillsArray = value.split(",").map((skill) => skill.trim());
    }
    console.log("skill array: ", skillsArray);
    setSkillsDetails(skillsArray);
  };

  const handleCareerDetailChange = (e) => {
    const { name, value } = e.target;
    setCareerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      skills,
    }));
  };

  //check
  const handleSubmit = (e) => {
    e.preventDefault();
    let localCareerDetails = careerDetails;

    if (Array.isArray(localCareerDetails)) {
      localCareerDetails = {};
      localCareerDetails.skills = skills;
      if(careerDetails.careeraim){
        localCareerDetails.careeraim = careerDetails.careeraim;
      }
    } else {
      localCareerDetails.skills = skills;
    }
    console.log("BEFORE SENDING ", localCareerDetails);
    updateCareerDetails(contactName, localCareerDetails);
  };

  return (
    <div>
      <h1>Update Career Details</h1>

      <form>
        <div>
          <label> Who's career detail you want to update ?</label>
          <br />
          <br />
          <label> Name : </label>
          <input
            type="text"
            name="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
        </div>

        <br />
        <div>
          <label> Career Aim : </label>
          <input
            type="text"
            name="careeraim"
            value={careerDetails.careeraim}
            onChange={handleCareerDetailChange}
          />
        </div>

        <br />
        <div>
          <label> Passion : </label>
          <input
            type="text"
            name="passion"
            value={careerDetails.passion}
            onChange={handleCareerDetailChange}
          />
        </div>

        <br />
        <div>
          <label> Previous Company : </label>
          <input
            type="text"
            name="previouscompany"
            value={careerDetails.previouscompany}
            onChange={handleCareerDetailChange}
          />
        </div>

        <br />

        <div>
          <label>Qualification : </label>
          <input
            type="text"
            name="qualification"
            value={careerDetails.qualification}
            onChange={handleCareerDetailChange}
          />
        </div>

        <br />
        <div>
          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={skills.join(", ") || ""}
            onChange={handleSkillsDetailChange}
          />
        </div>

        <br />
        <div>
          <button onClick={handleSubmit}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default CareerDetailsUpdateForm;
