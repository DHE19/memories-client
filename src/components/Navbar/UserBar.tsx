import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'
interface IProps{
    name:string
    dispatch():void;
}
const UserBar:React.FC<IProps> = ({name,dispatch}) => {
    return (
        <div className="flex items-center gap-4">
            <span>{name}</span>
            <button onClick={dispatch} className="flex py-2 px-4 bg-blue-500 rounded">
                <span>Logout</span>
                <ArrowLeftOnRectangleIcon className="h-4 w-4 mt-1" />
            </button>
        </div>
    )
}

export default UserBar
