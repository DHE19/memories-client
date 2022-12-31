import { FormEvent, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { IUserRegister} from "../../type";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { logIn, signUp } from "../../redux/actions/auth";
import {useNavigate} from 'react-router-dom'

const initialValue = {email:'', password:'', name:''}
const Auth = () => {
    const dispatch:Dispatch<any> = useDispatch();
    const navigation = useNavigate();
    const [formData, setFormData] = useState<IUserRegister>(initialValue);
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>, type:'signup'|'login') =>{
            e.preventDefault();
            if(type === "login") dispatch(logIn({email:formData.email, password:formData.password},
                () => navigation('/posts')));

            else if(type === 'signup')dispatch(signUp(formData,
                () => navigation('/posts')));
    }

    const handleChange = (id:string,value:string) =>{
        let clave = id as keyof typeof formData
        setFormData({...formData,[clave]:value} )
    }
    return (
        <div className="h-[85vh] lg:h-screen w-full flex flex-col items-center justify-center px-4">
             <div className=" w-[95vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[500px] bg-gradient-to-t from-blue-500 to to-blue-400 rounded-xl shadow-lg shadow-black/60 relative flex flex-col justify-between overflow-hidden">
                    <Login onChange={handleChange} handleSubmit={handleSubmit}/>
                    <Signup onChange={handleChange} handleSubmit={handleSubmit} />
             </div>
        </div>
    )
}

export default Auth

