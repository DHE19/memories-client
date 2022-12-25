import {EyeIcon} from '@heroicons/react/24/solid'
interface IProps{
    type:string;
    name:string;
    placeholder:string;
    label:string;
    onChange(id:string,value:string):void;
}
const InputLabel:React.FC<IProps> = ({name,type,placeholder,label,onChange}) => {
    return (
        <>
            <label htmlFor={name} className="mt-5 text-lg font-semibold text-white mb-2 relative">
                {label}:
                {type === 'password' && <EyeIcon className='w-5 h-5 absolute right-3  text-slate-500 hover:text-slate-800  cursor-pointer bottom-[-42px]'/> }
            </label>
            <input 
            className="rounded-lg py-3 px-2 bg-blue-100  focus:outline-blue-400 text-slate-700" 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={(e) => onChange(name,e.target.value)}
            />
            
        </>
    )
}

export default InputLabel
