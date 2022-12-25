import { FC, FormEvent } from "react"
import InputLabel from "./InputLabel"
interface IProps{
    handleSubmit(e:FormEvent<HTMLFormElement>,type:string):void;
    onChange(id:string,value:string):void;
}


const Login:FC<IProps> = ({handleSubmit,onChange}) => {
    return (
       
            <form className="flex flex-col px-6" onSubmit={(e) =>handleSubmit(e,'login')}>
            <h1 className="text-3xl font-bold text-center py-2 text-white">Login</h1>
                <InputLabel 
                onChange={onChange}
                type="text" name="email" placeholder="Correo..." label="Correo"/>
                <InputLabel 
                onChange={onChange}
                type="password" name="password" placeholder="Contraseña..." label="Contraseña"/>
                <div className="flex flex-col justify-center my-8">
                    <button 
                    type="submit"
                    className="w-full py-3 bg-white hover:bg-slate-100 text-gray-900 rounded-md font-bold mx-auto">Login</button>
                </div>
            </form>


    )
}

export default Login
