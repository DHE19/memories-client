
import { IState, IPostActions, IOnlinePost } from "../../type";


const InitalState:IState ={
    postIdToUpdate: null,
    posts:[]
}


const reducer = (state:IState = InitalState, action:IPostActions):IState =>{


    switch(action.type){
        case 'FETCH_ALL':
            return {
                ...state,posts:action.payload as IOnlinePost[]
            }
        case 'CREATE':
            return {
                ...state, posts:[...state.posts,...action.payload as IOnlinePost[]]
            }
        case 'ID_SELECTED':
            //seteamos el nuevo valor
            return{
                ...state, postIdToUpdate: action.payload as string
            }
        case 'UPDATE':{
            //obtenemos el payload
            let postToUpdate = action.payload as IOnlinePost;
            //creamos obtenemos los posts
            let posts = [...state.posts];
            //buscamos el index del post a actualizar
            let indexTargetPost = posts.findIndex(p => p._id === postToUpdate._id);
            //actualizamos el post
            posts[indexTargetPost] = postToUpdate;
            console.log('end of updating');
            //enviamos los nuevos post
            return{
                posts,postIdToUpdate: null
            }
        }

        case 'DELETE':{
            let posts = [...state.posts].filter(post => post._id !== action.payload as string);
            return{
                ...state, posts
            }
        }
            
        default:
            return state;
    }
} 

export default  reducer;