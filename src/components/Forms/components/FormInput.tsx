
interface IProps {
    type:string;
    title:string
    name:string;
    value: string;
    onChange(arg:string):void;
}


const FormInput:React.FC<IProps> = ({title,name,value,onChange,type}) => {
    return (
       <>
            <label className="mt-3 font-bold text-slate-100 mb-1" 
            htmlFor={name}>{title}</label>
            <input 
            className="py-3 placeholder:font-extralight font-base text-blue-900 placeholder:text-blue-900 focus:text-slate-600 focus:outline-none focus:border-b-[3px] focus:border-b-green-400 transition-all duration-300 px-2 bg-blue-100 rounded "
            type={type} 
            placeholder={title}
            name={name} 
            value={value} 
            onChange={(e)=> onChange(e.target.value)}/>
       </>
    )
}

export default FormInput
