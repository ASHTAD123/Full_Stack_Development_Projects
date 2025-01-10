import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DetailsArrayContext from "../context/DetailsArrayContext";
// import { addDetails } from "../services/myService";
import axios from 'axios'


const AddMyCareerDetails = () => {
  const [careeraim, setCareerAim] = useState();
  const [passion, setPassion] = useState("");
  const [previouscompany, setPreviousCompany] = useState("");
  const [qualification, setQualification] = useState("");
  const [skills, setSkills] = useState([""]);

  const careerDetails = [
    careeraim,
    passion,
    previouscompany,
    qualification,
    skills,
  ];

  const navigator = useNavigate();
  const { details } = useContext(DetailsArrayContext);

  const handleSkillsChange = (e) => {
    setSkills(e.target.value.split(","));
  };

  async function saveDetails(e) {
    console.log("SAVE DETAILS in Career Details ()");
    e.preventDefault();

    try {
      console.log("Try block in career details");

      if (!details) return <h1>Details not found</h1>;

      e.preventDefault();
      details.push(careerDetails);
      console.log(details);

     // addDetails(careerDetails);
     
     axios.post("http://localhost:8080/portfolio/addMyDetails", details, {
     
      headers: {
        'Content-Type': 'application/json',
      }
      
    }).catch(function (error) {
      if (error.response) {
  
        console.log("CATCH in SERVICE COMPONENT");
        console.log(error.response.status);
        console.log(error.toJSON());
      
      }else if (error.request) {
    
        console.log(error.request);
        console.log(error.toJSON());
      } else {
  
       // console.log('Error', error.message);
        console.log(error.toJSON());
      }
      console.log(error.config);
     });

    } catch (e) {
      console.log("CATCH BLOCK");
      console.error(e);
    }
  }

  return (
    <form>
      <div>
        <label>Career Aim:</label>
        <input
          type="text"
          value={careeraim}
          onChange={(e) => setCareerAim(e.target.value)}
        />
      </div>
      <div>
        <label>Passion:</label>
        <input
          type="text"
          value={passion}
          onChange={(e) => setPassion(e.target.value)}
        />
      </div>
      <div>
        <label>Previous Company:</label>
        <input
          type="text"
          value={previouscompany}
          onChange={(e) => setPreviousCompany(e.target.value)}
        />
      </div>
      <div>
        <label>Qualification:</label>
        <input
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
      </div>
      <div>
        <label>Skills (comma separated):</label>
        <input
          type="text"
          value={skills.join(",")}
          onChange={handleSkillsChange}
        />
      </div>

      <button onClick={saveDetails}>Submit</button>
    </form>
  );
};

export default AddMyCareerDetails;
