import { useEffect, useState } from "react"
import { ILocalPost, IPost,IOnlinePost } from "../../type";
import FormInput from "./components/FormInput";
import FormInputImage from "./components/FormInputImage";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { createPost, setID, updatePost } from "../../redux/actions/post";
import { AppState } from "../../redux/reducers";
const EmptyElement:ILocalPost  = {title:'',tags:'',message:'', selectedFile:'', name:'',likes:[]}
const Form = () => {
    const {postIdToUpdate,posts} = useSelector((state:AppState) => state.posts)
    const {user} = useSelector((state:AppState) => state.auth)
    const dispatch:Dispatch<any> = useDispatch();
    const [postData, setPostData] = useState<ILocalPost>( EmptyElement);
    //debes definir un condicional, si el usuario no se ha logeado (para ello requerimos recuperar los datos almacenados en store)
    //y con ese mismo de usuario debes de colocar el nombre del autor del post
    
   
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            // si tiene valor
            if(postIdToUpdate){
                //buscamos de el post con el id
                let newpost = posts.find(p => p._id === postIdToUpdate) as IOnlinePost;
                // creamos un nuevo objeto y lo pasamos como parámetro en la función
                dispatch(updatePost({...postData, 
                    __v:newpost.__v,
                    _id:newpost._id,
                    createdAt: newpost.createdAt,
                    likes:newpost.likes,
                    creator:newpost.creator,
                    tags:postData.tags.split(' ')}));
            }else{
                const newPost:IPost = {...postData, tags:postData.tags.split(' '), likes:[],name:user!.result.name }
                dispatch(createPost(newPost));
            }
            handleClear();
    }

    const handleClear = () =>{
        if(postIdToUpdate){
            dispatch(setID(null))
        }
        setPostData(EmptyElement);
        
    }

    useEffect(() => {
        if(user)setPostData({...postData,name:user.result.name});
        
    },[user]);

    useEffect(() => {
        // tiene valor
        if(postIdToUpdate){
            //buscamos el post con el id
            let newpost = posts.find(p => p._id === postIdToUpdate) as IOnlinePost;
            // pasamos todos las propiedades del objeto
            setPostData({...newpost,tags: newpost.tags.join(' ')});
        }
        
    }, [postIdToUpdate,posts])


    if(!user){
        return (
                    <div>
                        <div className="text-center text-white text-4xl font-bold">
                            <h2>You need to be logged to post a new memory</h2>
                        </div>
                    </div>
                )
    }

    return (
        <div className="form-section overflow-hidden">
                <h1 className="text-center text-2xl font-semibold">Crear Memoria</h1>
            <form onSubmit={handleSubmit} className="flex flex-col lg:p-2 xl:p-0">
                <FormInput
                type="text"
                name="title"
                title="Titulo"
                value={postData.title}
                onChange={(s) => setPostData({...postData,title:s})}
                />
                <FormInput
                type="text"
                name="message"
                title="Mensaje"
                value={postData.message}
                onChange={(s) => setPostData({...postData,message:s})}
                />
                <FormInput 
                type="text"
                name="tags"
                title="Etiquetas"
                value={postData.tags} 
                onChange={(e) => setPostData({...postData,tags:e})}/>

                <div>
                    <FormInputImage setValue={(s:string) => setPostData({...postData,selectedFile:s})}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mt-4 items-center">
                    <button className="px-4 py-3 border-2 transition-all duration-300 border-green-400 hover:bg-green-400 hover:shadow-md hover:text-green-100 rounded-md">{`${!postIdToUpdate ? 'Submit': 'Update'}`}</button>
                    <button 
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-3 border-2 border-red-400 ransition-all duration-300 hover:bg-red-400 hover:shadow-md rounded-md hover:text-red-100">{`${!postIdToUpdate ? 'Clear': 'Cancel'}`}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
