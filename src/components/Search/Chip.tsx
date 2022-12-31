import {XCircleIcon} from '@heroicons/react/24/solid'
interface IProps {
    text:string;
    remove(name:string):void;
}
const Chip:React.FC<IProps> = ({text, remove}) => (<span className="chip">{text}
<XCircleIcon className='w-4 h-4 inline mb-[3px] ml-[2px] cursor-pointer'
onClick={() => remove(text)}/></span>)


export default Chip
