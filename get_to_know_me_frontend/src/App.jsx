import './App.css'
import ListMyDetails from './components/listMyDetails'
import AddMyDetails from './components/AddMyDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'


function App() {

  return (
    <>
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        
                {/* <Route path='/' element={ <ListMyDetails />}> </Route> */}
                <Route path='/details' element={ <ListMyDetails/> } />
                <Route path='/addDetails' element={ <AddMyDetails/> } />
     </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
