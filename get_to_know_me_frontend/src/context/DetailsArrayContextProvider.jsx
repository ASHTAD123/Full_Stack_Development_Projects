import React,{useState} from 'react';
import DetailsArrayContext from './DetailsArrayContext';

const DetailsArrayContextProvider = ({children}) =>{

    const [details, setDetails] = useState(null);

    return(
        <DetailsArrayContext.Provider value={{details, setDetails}}>
             {children}
        </DetailsArrayContext.Provider>
    )
}

export default DetailsArrayContextProvider;