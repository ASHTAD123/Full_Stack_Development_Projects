import React from "react";
import { useState } from "react";
import { updateContactDetails } from "../services/myService";

const ContactDetailsUpdateForm = () => {
  
  const [contactDetails, setContactDetails] = useState([""]);
  const [contactName, setContactName] = useState("");

  const handleContactDetailChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BEFORE SENDING ", contactDetails);
    updateContactDetails(contactName, contactDetails);
  };

  return (
    <div>
      <h1>Update Contact Details</h1>

      <form>
        <div>
          <label> Who's contact detail you want to update ?</label>
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

        <div>
          <br />
          <br />
          <label> Updated Name : </label>
          <input
            type="text"
            name="name"
            value={contactDetails.name || " "}
            onChange={handleContactDetailChange}
          />
        </div>

        <br />
        <div>
          <label> Contact Number : </label>
          <input
            type="number"
            name="contactNumber"
            value={contactDetails.contactNumber || " "}
            onChange={handleContactDetailChange}
          />
        </div>
        
        <br />
        <div>
          <label> Email : </label>
          <input
            type="email"
            name="contactEmail"
            value={contactDetails.contactEmail || " "}
            onChange={handleContactDetailChange}
          />
        </div>

        <br />
        <div>
          <label> Social Media Link : </label>
          <input
            type="text"
            name="socialMediaLink"
            value={contactDetails.socialMediaLink || " "}
            onChange={handleContactDetailChange}
          />
        </div>

        <br />
        <button type="submit" onClick={handleSubmit}>
        Update
        </button>
    
      </form>
    </div>
  );
};

export default ContactDetailsUpdateForm;
