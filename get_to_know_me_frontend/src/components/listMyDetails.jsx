import React, { useEffect, useState  } from 'react';
import { listDetails } from '../services/myService'



const listMyDetails = () => {
  

    const [details1,setDetails] = useState(['']) 


    useEffect( ()=>{
      
      listDetails().then( (response) =>{
      
        // if (response.data.key === 'propertyToIgnore') {
        //   return undefined; // Exclude this property
        // }

         // setDetails(response.data)
      
          console.log(response);
          
          }).catch(Err =>{
      
          console.error(Err)
        })
    })

  // ------- DUMMY ------ DATA --------
  //     const dummyData = [
  //     {
  //       id: 1,
  //       firstName: "Ashtad",
  //       lastName: "Irani",
  //       email: "ashtad@gmail.com",
  //     },
  //     {
  //       id: 2,
  //       firstName: "Kaushik",
  //       lastName: "Khara",
  //       email: "kaushik@gmail.com",
  //     },
  //   ];
  return (
    <div className="container">
      <h2>My details</h2>
      <table className='table'>
        <thead >
          <tr>
            <th> ID : </th>
            <th> Age </th>
            <th> Gender</th>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
                {
                  
                    // details1.map(details =>
                        
                    //     <tr key={details.userid}>
                    //             <td>{details.age}</td>
                    //             <td>{details.gender}</td>
                    //             <td>{details.name}</td>
                    //     </tr>
                    // )
                }
        </tbody>
      </table>
      
    </div>
  );
};

export default listMyDetails;
