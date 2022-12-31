import decode from 'jwt-decode'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Dispatch } from "redux";
import { logOut } from "../../redux/actions/auth";
import { AppState } from "../../redux/reducers";
import { IAuthActions } from "../../type";
import NavLinks from "./NavLinks";
import UserBar from "./UserBar";
import { useNavigate } from 'react-router-dom';

const memories = require('../../assets/img/memories.png');  


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch:Dispatch<IAuthActions> = useDispatch();
    const {user} = useSelector((state:AppState) => state.auth)



    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/');
    };
    //se tiene que verficar que esto funciona
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token) as any;
            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogOut();
        }
    }, [user, dispatch])



    return (
        <header className='bg-blue-600 py-2 '>
            <nav className='w-full container mx-auto flex justify-between items-center px-2 md:px-0'>
                <div className='cursor-pointer'>
                    <Link to={user?.token ? '/posts?page=1' :'/'}>
                        <div className="flex place-items-center gap-1">
                            <img src={memories} alt='memories' className=' w-8 h-8 md:h-10  md:w-10' />
                            <h1 className='text-slate-200 font-bold text-lg md:text-2xl'>Memories</h1>
                        </div>
                    </Link>
                </div>

                <ul className="text-white font-semibold flex gap-4">
                    {user?.result 
                    ? <UserBar dispatch={handleLogOut} name={user.result.name}/> 
                    : <NavLinks/>}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
