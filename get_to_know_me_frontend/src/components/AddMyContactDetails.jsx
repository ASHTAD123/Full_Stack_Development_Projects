import React, { useState , useContext} from 'react';
import { useNavigate } from "react-router-dom";
import DetailsContext from "../context/DetailsArrayContext";

const AddMyContactDetailsForm = () => {
  
  const [contactDetails, setContactDetails] = useState({});
  const {setDetails } = useContext(DetailsContext);
  const {details} = useContext(DetailsContext);
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({...contactDetails,[name]: value, });
  };
 


  function saveDetails(e) {
    console.log(" Save Details() in add Contact details ()")
    try {  
      e.preventDefault();
      console.log("Try block in contact details");
      if (!details) return <h1>Details not found</h1>;
      console.log({details});
      
     // setDetails( {...details,"contactDetails": contactDetails } );
    //  setDetails( {...details, contactDetails } );
     // console.log(contactDetails)
      //  console.log(details)
      navigator("/addMyCareerDetails");
    } 
     catch (e) {
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
