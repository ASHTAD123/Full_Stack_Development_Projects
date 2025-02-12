import React, { useEffect, useState } from "react";
import { listDetails } from "../services/myService";

const listMyDetails = () => {
  
  const [details, setDetails] = useState([""]);

  useEffect(() => {
    
    listDetails()
      .then((response) => {
        setDetails(response.data);
    
      })
      .catch((Err) =>  console.error(Err));
  },[]

);

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
          {details.map((details) => (
            <tr key={details.userid}>
              <td>{details.userid}</td>
              <td>{details.name}</td>
              <td>{details.age}</td>
              <td>{details.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container">
        <h2>Contact Details</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Contact ID</th>
              <th> Name</th>
              <th>Contact Number</th>
              <th> Email</th>
              <th>Social Media Link</th>
            </tr>
          </thead>
          <tbody>
            {details.map((details) =>
              details.contactDetails?.map((contact, index) => (
                <tr key={details.contactId}>
                  <td>{contact.contactId}</td>
                  <td>{contact.name}</td>
                  <td>{contact.contactNumber}</td>
                  <td>{contact.email}</td>
                  <td>{contact.socialMediaLink}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {
        <div className="container">
          <h2>Career Details</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Career Aim</th>
                <th> Passion</th>
                <th>Previous Company</th>
                <th> Qualification</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              {details.map((details, index) =>
                details.careerDetails?.map((career) => (
                  <tr key={details.id}>
                    <td>{career.careeraim}</td>
                    <td>{career.passion}</td>
                    <td>{career.previouscompany}</td>
                    <td>{career.qualification}</td>
                    <td>{career.skills}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default listMyDetails;
