import { IOnlinePost } from "../../../type"
import {HandThumbUpIcon, TrashIcon,PencilSquareIcon} from '@heroicons/react/24/solid'
import moment from "moment"
interface IProps {
    currentUserId:string;
    post: IOnlinePost;
    dispatchDelete(id:string):void;
    dispatchEdit(id:string):void;
    dispatchLike(id:string):void;
}


const Post:React.FC<IProps> = ({post,dispatchDelete,dispatchEdit,dispatchLike,currentUserId}) => {
    return (
        <div className="sizing w-full h-[650px] md:h-[550px]  lg:h-[350px] text-white rounded-xl hover:shadow-lg hover:shadow-black/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 relative group">
                <div className="absolute w-full h-full bg-gradient-to-t from-slate-800 hover:from-slate-900 to-gray-600/10 hover:to-gray-700/40 z-30 transition-all duration-300 "></div>
                <img src={post.selectedFile} alt={post.title} className="h-full w-full object-cover group-hover:blur-sm transition-all duration-300 group-hover:-translate-y-5"/>
            

            <div className="top-0 left-0 absolute font-semibold w-full mt-1 px-2 z-40" >
                    <h1 className="group-hover:text-lg duration-300 ">{post.title}</h1>
                    <p className="text-xs">{moment(post.createdAt).fromNow()}</p>
                </div>

            <div className="py-1 px-2 absolute z-40 bottom-1 transition-all translate-y-11 group-hover:translate-y-3 w-full">
                <p className="text-sm italic text-right  font-semibold">{post.name}</p>  
                {post.tags.map((t,i) => <span key={i} className="text-xs text-gray-400 hover:underline mr-1">{t}</span>)}
                <p className=" font-semibold text-sm leading-4 mt-2">{post.message.split(' ').map((i,index) => index < 15 ? i : null).join(' ')}...</p>
                
                <div className="flex justify-between items-center mt-3 mb-2">
                    <div 
                    onClick={() => dispatchLike(post._id)}
                    className="flex gap-1 cursor-pointer rounded hover:bg-gray-200 px-2 py-1">
                        <span className="text-sm"> {`${post.likes.length}`}</span>
                        <HandThumbUpIcon className="w-4 h-4 text-blue-500"/>
                    </div>

                    {currentUserId === post.creator &&  
                            <PencilSquareIcon
                            /* se setea el id */
                            onClick={() => dispatchEdit(post._id) }
                            className="w-5 h-5  hover:text-orange-400 cursor-pointer "/>
                    }
                    
                    
                    {currentUserId === post.creator &&  
                        (<div className="flex gap-1 rounded hover:bg-gray-200 px-2 py-1 cursor-pointer" 
                        onClick={() => dispatchDelete(post._id)}
                        >
                            <TrashIcon className="w-4 h-4 text-red-500"/>
                        </div>)
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Post
