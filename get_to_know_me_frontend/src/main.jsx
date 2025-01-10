import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DetailsArrayContextProvider from './context/DetailsArrayContextProvider.jsx'

createRoot(document.getElementById('root')).render(

     <DetailsArrayContextProvider>
         <App />
     </DetailsArrayContextProvider>


  
)
