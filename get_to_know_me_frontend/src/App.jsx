import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import ListMyDetails from './components/listMyDetails'
import AddMyDetailsForm from './components/AddMyDetails'
import AddMyContactDetail from './components/AddMyContactDetails'
import  AddMyCareerDetails  from './components/AddMyCareerDetails'

function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
                {/* <Route path='/details'            element={ <ListMyDetails/> } />
         
              */}
                {/* <Route path='/addMyContactDetails' element={ <AddMyContactDetail/> } />  */}
                <Route path='/addMyDetails'       element={ <AddMyDetailsForm/> } />
                {/* <Route path='/addMyCareerDetails' element={ <AddMyCareerDetails/> } /> */}
     </Routes>
      </BrowserRouter>

    </>
  )
}

export default App