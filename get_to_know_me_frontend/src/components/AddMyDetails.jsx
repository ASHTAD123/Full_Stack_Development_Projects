import React, { useState, useContext } from "react";
import { saveDetails } from "../services/myService";

const AddMyDetailsForm = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [data,setData] = useState('');
    const [contactDetails,setContactDetails] = useState([]);
    const [careerDetails,setCareerDetails] = useState([]);
 
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [socialMediaLink, setSocialMediaLink] = useState('');    
    const myData ={
      name,
      age,
      gender,  
      contactDetails,
      careerDetails,
    } 

    const newContact = {
      name,
      contactNumber,
      email,
      socialMediaLink,
    };

    const handleChange =(e)=>{
      setData({...data,[e.target.name] : e.target.value})
    }
    const handleContactDetailChange =(e)=>{
      setContactDetails((prevData)=>[...prevData,newContact])

    }
    const handleCareerDetailChange =(e)=>{
      setCareerDetails({...setCareerDetails,[e.target.name] : e.target.value})
    }


  const handleSubmit = (e) => {
    e.preventDefault();

    saveDetails(myData)
    .then((res)=>{
      console.log("Details Added Successfully");
    }).catch((error)=>{
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
            onChange={ (e) => setName(e.target.value)}
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
            name="contactName"
            value={data.contactName}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={data.contactNumber}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleContactDetailChange}
          />
        </div>

        <div>
          <label>Social Media Link:</label>
          <input
            type="text"
            name="socialMediaLink"
            value={data.socialMediaLink}
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
            value={data.careeraim}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Passion:</label>
          <input
            type="text"
            name="passion"
            value={data.passion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Previous Company:</label>
          <input
            type="text"
            name="previouscompany"
            value={data.previouscompany}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={data.qualification}
            onChange={handleCareerDetailChange}
          />
        </div>
        <div>
          <label>Skills (comma-separated):</label>
          <input
            type="text"
            name="skills"
            value={data.skills}
            onChange={handleCareerDetailChange}
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
