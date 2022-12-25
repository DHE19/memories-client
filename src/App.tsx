import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './styles.css'
import {Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';



const App = () => {
   

    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path='/'  element={<HomePage/>} />
                <Route path='/login' element={<Auth/>}/>
            </Routes>

        </div>
    )
}


export default App
