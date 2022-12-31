import * as api from '../../api';
import { DispatchType, IOnlinePost, IPost, IPostActions, IPostPagination, IQuerySearch } from '../../type';




export const getPosts = (page:number) => async(dispatch:DispatchType) =>{

     try {
          const {data} = await api.fetchPostsPage(page);
          const info: IPostPagination = {...data}
          dispatch( {type:'FETCH_POST',payload:info});
     } catch (error:any) {
          console.log(error.message);
     }
}


     export const getPostsBySearch = (searchQuery:IQuerySearch) => async(dispatch:DispatchType) =>{
     
          console.log('estos son los a enviar',searchQuery);
          try {
               const {data} = await api.fetchPostsBySearch(searchQuery);

               dispatch( {type:'FETCH_BY_SEARCH',payload:data});
               
          } catch (error:any) {
               console.log(error.message);
          }
     
     }

     //se envia un payload y con valor del id
export const setID = (id:string | null):IPostActions => ({type:'ID_SELECTED',payload:id});


export const updatePost = (post:IOnlinePost) => async (dispatch:DispatchType) => {
     try {
          const {data} = await api.updatePost(post._id,post);
          dispatch({type:'UPDATE',payload:data});
     } catch (error) {
          console.log('ocurrio un error al actualiar:',error);
                    
     }
}

export const createPost = (post:IPost) => async(dispatch:DispatchType) =>{
     
     try {
          const {data} = await api.createPost(post);          
          dispatch( {type:'CREATE',payload:[data]});
     } catch (error:any) {
          console.log(error.message);
     }

}


export const deletePost = (id:string) => async(dispatch:DispatchType) => {
     try {
          await api.deletePost(id);
          dispatch({type:'DELETE',payload:id});
     } catch (error) {
          console.log(error);
          
     }
}


export const likeTriggered = (id:string ) => async (dispatch:DispatchType) => {
     try {
          const {data} = await api.likePost(id);
          dispatch({type:'UPDATE',payload:data});
     } catch (error) {
          console.log('something goes wrong', error);
          
     }
}

