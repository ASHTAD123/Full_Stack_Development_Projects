import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import ListMyDetails from './components/listMyDetails'
import AddMyDetailsForm from './components/AddMyDetails'
import PersonalDetailsUpdateForm from './components/PersonalDetailsUpdateForm'
import ContactDetailsUpdateForm from './components/ContactDetailsUpdateForm'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>
                 <Route path='/details'  element={ <ListMyDetails/> } />
                <Route path='/addMyDetails' element={ <AddMyDetailsForm/>}  />
                <Route path='/updateMyDetails' element={ <PersonalDetailsUpdateForm/>}  />
                <Route path='/updateContactDetails' element={ <ContactDetailsUpdateForm/>}  />
     </Routes>
      </BrowserRouter>

    </>
  )
}

export default App