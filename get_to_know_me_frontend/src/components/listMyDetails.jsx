import React, { useEffect, useState } from "react";
import { listDetails } from "../services/myService";

const listMyDetails = () => {
 
  const [personalDetails, setPersonalDetails] = useState(['']);

  useEffect(() => {
    listDetails()
      .then((response) => {
        console.log(response.data)
        setPersonalDetails(response.data);
      })
      .catch((Err) => {
        console.error(Err);
      });
  }, []);

  return (
    <div className="container">
      <h2>Personal Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
          personalDetails.map(details => 
            <tr key={details.userid}>
              <td>{details.userid}</td>
              <td>{details.name}</td>
              <td>{details.age}</td>
              <td>{details.gender}</td>
            </tr>)
        }
        </tbody>
      </table>

      {/* <div className="container">
        <h2>Contact Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Contact ID</th>
              <th>User ID</th>
              <th>Contact Name</th>
              <th>Contact Number</th>
              <th>Contact Email</th>
              <th>Social Media Link</th>

            </tr>
          </thead>
          <tbody>
            {
             personalDetails.map((details) =>
              details.contactDetails.map((contact) => (
                <tr key={contact.contactId}>
                  <td>{contact.contactId}</td>
                  <td>{contact.personalDetails}</td>
                  <td>{contact.name}</td>
                  <td>{contact.contactNumber}</td>
                  <td>{contact.email}</td>
                  <td>{contact.socialMediaLink}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default listMyDetails;
