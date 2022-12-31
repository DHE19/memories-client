import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './styles.css'
import {Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';
import Features from './pages/Features';
import PostDetails from './components/PostDetails/PostDetails';
import { useSelector } from 'react-redux';
import { AppState } from './redux/reducers';
import { Navigate } from 'react-router-dom';




const App = () => {
    const {auth} = useSelector((state:AppState) => state)

    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path="/" element={auth.user?.token ? <Navigate to={'/posts'} />:<Features/>}/>
                <Route path='/posts'  element={<HomePage/>} />
                <Route path='/posts/search' element={
                (<HomePage/>)} />
                <Route path='/login' element={!auth.user?.token ? <Auth/> : <Navigate to={'/posts'}/> }/>
                <Route path='/posts/:id' element={<PostDetails/>}/>
            </Routes>

        </div>
    )
}


export default App
