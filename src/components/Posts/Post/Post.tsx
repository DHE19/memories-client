import { IOnlinePost } from "../../../type"
import {HandThumbUpIcon, TrashIcon,PencilSquareIcon} from '@heroicons/react/24/solid'
import moment from "moment"
interface IProps {
    post: IOnlinePost;
    dispatchDelete(id:string):void;
    dispatchEdit(id:string):void;
    dispatchLike(id:string):void;
}


const Post:React.FC<IProps> = ({post,dispatchDelete,dispatchEdit,dispatchLike}) => {
    return (
        <div className="w-full bg-slate-50 rounded-lg hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="head relative h-[200px] cursor-default">
                <div className="absolute w-full h-full bg-gray-900/30"></div>
                <div className="ml-2  mt-2 absolute text-white font-semibold">
                    <h1 className="">{post.title}</h1>
                    <p className="text-xs ">{moment(post.createdAt).fromNow()}</p>
                </div>
                
                <div className="absolute right-2 top-2 ">
                    <PencilSquareIcon
                    /* se setea el id */
                    onClick={() => dispatchEdit(post._id) }
                    className="w-5 h-5 text-white hover:text-orange-400 cursor-pointer"/>
                </div>

                <p className="absolute  text-white left-1 bottom-1 text-sm font-semibold">{post.creator}</p>
                <img src={post.selectedFile} alt={post.title} className="h-full w-full object-cover"/>
            </div>

            <div className="py-1 px-2">
                {post.tags.map((t,i) => <span key={i} className="text-xs text-gray-400 hover:underline mr-1">{t}</span>)}
                <p className="text-slate-800 font-semibold text-sm leading-4 mt-2">{post.message}</p>
                <div className="flex justify-between mt-3 mb-2">
                    <div 
                    onClick={() => dispatchLike(post._id)}
                    className="flex gap-1 rounded hover:bg-gray-200 px-2 py-1">
                        <span className="text-sm"> {`${post.likeCount}`}</span>
                        <HandThumbUpIcon className="w-4 h-4 text-blue-500"/>
                    </div>
                    <div className="flex gap-1 rounded hover:bg-gray-200 px-2 py-1"
                    onClick={() => dispatchDelete(post._id)}
                    >
                        <span className="text-sm"> Eliminar</span>
                        <TrashIcon className="w-4 h-4 text-red-500"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
