import { FC, FormEvent, useState } from "react"
import InputLabel from "./InputLabel";

interface IProps{
    handleSubmit(e:FormEvent<HTMLFormElement>,type:string):void;
    onChange(id:string,value:string):void;
}

const Signup:FC<IProps> = ({handleSubmit,onChange}) => {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className={` bg-gradient-to-t from-red-600 to-red-500 absolute bottom-[-290px] shadow-md w-full h-full transition-all ease-in duration-300 ${showMenu ? 'show-singup':'translate-y-[140px]'}`}>
                <form className="flex flex-col px-6" onSubmit={e => handleSubmit(e,'signup')}>
                    <h1 
                    className="text-white font-bold text-3xl py-4 text-center cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}>
                        Sign Up
                    </h1>

                    <InputLabel onChange={onChange} type="text" name="name" placeholder="Nombre..." label="Nombre"/>
                    <InputLabel onChange={onChange} type="text" name="email" placeholder="Correo..." label="Correo"/>
                    <InputLabel onChange={onChange} type="password" name="password" placeholder="Contraseña..." label="Contraseña"/>

                    <div className="flex justify-center my-8">
                        <button className="w-full py-3 bg-white hover:bg-slate-100 text-gray-900 rounded-md font-bold mx-auto">Sign up</button>
                    </div>
            </form>
        </div>
    )
}

export default Signup
