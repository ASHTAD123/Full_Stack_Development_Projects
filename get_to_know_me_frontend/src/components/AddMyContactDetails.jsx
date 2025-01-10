import React, { useState , useContext} from 'react';
import { useNavigate } from "react-router-dom";
import DetailsArrayContext from "../context/DetailsArrayContext";

const AddMyContactDetailsForm = () => {
  
  const [contactDetails, setContactDetails] = useState({
    name: "",
    contactNumber: "",
    email: "",
    socialMediaLink: "",
  });

  const navigator = useNavigate();
  const { details } = useContext(DetailsArrayContext);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({...contactDetails,[name]: value, });
  };

 
  async function saveDetails(e) {
   
    console.log(" Save Details() in add Contact details ()")

    try {
      console.log("TRY BLOCK");
      if (!details) return <h1>Details not found</h1>;

      e.preventDefault();
      details.push(contactDetails);
      console.log(details);

      navigator("/addMyCareerDetails");
    } catch (e) {
      console.log("CATCH BLOCK");
      console.error(e);
    }
    console.log(details);
  }

  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contactDetails.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={contactDetails.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contactDetails.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Social Media Link:</label>
        <input
          type="text"
          name="socialMediaLink"
          value={contactDetails.socialMediaLink}
          onChange={handleChange}
        />
      </div>
      
      <button onClick={saveDetails}>Submit</button>
    </form>
  );
};

export default AddMyContactDetailsForm;
