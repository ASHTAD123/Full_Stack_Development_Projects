import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import ListMyDetails from './components/listMyDetails'
import AddMyDetailsForm from './components/AddMyDetails'
import PersonalDetailsUpdateForm from './components/PersonalDetailsUpdateForm'

function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
                 <Route path='/details'  element={ <ListMyDetails/> } />
                <Route path='/addMyDetails' element={ <AddMyDetailsForm/>}  />
                <Route path='/updateMyDetails' element={ <PersonalDetailsUpdateForm/>}  />
     </Routes>
      </BrowserRouter>

    </>
  )
}

export default App