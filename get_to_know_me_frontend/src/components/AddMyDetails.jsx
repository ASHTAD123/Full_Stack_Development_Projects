import React, { useState } from "react";
import { saveDetails } from "../services/myService";

const AddMyDetailsForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contactDetails, setContactDetails] = useState([]);
  const [careerDetails, setCareerDetails] = useState([]);
  const [skills, setSkillsDetails] = useState([]);

  const handleContactDetailChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSkillsDetailChange = (e) => {
    const { value } = e.target;
    const skillsArray = value.split(",").map((skill) => skill.trim());
    setSkillsDetails(skillsArray);
  };

  const handleCareerDetailChange = (e) => {
    const { name, value } = e.target;
    setCareerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const myData = {
    name,
    age,
    gender,
    contactDetails: [contactDetails],
    // careerDetails: [careerDetails, { ...careerDetails, skills }],
    careerDetails: [{ ...careerDetails, skills }],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveDetails(myData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>AddMyDetails</h1>
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

        <h1> Contact Details </h1>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={contactDetails.name || ""}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={contactDetails.contactNumber || ""}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={contactDetails.email || ""}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Social Media Link:</label>
          <input
            type="text"
            name="socialMediaLink"
            value={contactDetails.socialMediaLink || ""}
            onChange={handleContactDetailChange}
          />
        </div>

        <h1>Add Career Details</h1>

        <h2>Career Details</h2>
        <div>
          <label>Career Aim:</label>
          <input
            type="text"
            name="careeraim"
            value={careerDetails.careeraim || ""}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Passion:</label>
          <input
            type="text"
            name="passion"
            value={careerDetails.passion || ""}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Previous Company:</label>
          <input
            type="text"
            name="previouscompany"
            value={careerDetails.previouscompany || ""}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={careerDetails.qualification || ""}
            onChange={handleCareerDetailChange}
          />
        </div>

        <div>
          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={skills.join(", ") || ""}
            onChange={handleSkillsDetailChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMyDetailsForm;
