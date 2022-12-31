import Post from "./Post/Post"
import { useSelector } from "react-redux"
import {AppState} from '../../redux/reducers'
import { useDispatch } from "react-redux"
import { Dispatch} from "react"
import { deletePost, likeTriggered, setID } from "../../redux/actions/post"
const Posts = () => {
    const {posts} = useSelector((state:AppState) => state);
    const _id = useSelector((state:AppState) => state.auth.user?.result._id ?? 'invitado');
    const dispatch:Dispatch<any> = useDispatch();
    
    //tirgger Delete Post
    const handleDelete = (id:string) => dispatch(deletePost(id));
    //triger Edit Post
    const handleEditPost = (id:string) => dispatch(setID(id));
    //trigger like event
    const handleLike = (id:string) => dispatch(likeTriggered(id)); 
    return (    
        <div>
            {!posts.posts.length ? (
            <div className="h-screen flex items-center justify-center flex-col"><div className="lds-ripple"><div></div><div></div></div></div>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4 gap-y-6 px-4 lg:px-2">
                        {
                            posts.posts.map((post) =>(
                                <div key={post._id}>
                                    <Post currentUserId={_id} post={post} dispatchDelete= {handleDelete} dispatchLike={handleLike} dispatchEdit={handleEditPost}/>
                                </div>
                             ))
                        }
                </div>
            )
        }
        </div>
    )
}

export default Posts
