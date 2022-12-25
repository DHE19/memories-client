import { useEffect, useState } from "react"
import { ILocalPost, IPost,IOnlinePost } from "../../type";
import FormInput from "./components/FormInput";
import FormInputImage from "./components/FormInputImage";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { createPost, setID, updatePost } from "../../redux/actions/post";
import { AppState } from "../../redux/reducers";
const EmptyElement:ILocalPost  = {title:'',creator:'',tags:'',message:'', selectedFile:''}
const Form = () => {
    const {postIdToUpdate,posts} = useSelector((state:AppState) => state.posts)
    const dispatch:Dispatch<any> = useDispatch();
    const [postData, setPostData] = useState<ILocalPost>( EmptyElement);

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
                    likeCount:newpost.likeCount,
                    tags:postData.tags.split(' ')}));
            }else{
                const newPost:IPost = {...postData, tags:postData.tags.split(' '), likeCount:0}
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
        // tiene valor
        if(postIdToUpdate){
            //buscamos el post con el id
            let newpost = posts.find(p => p._id === postIdToUpdate) as IOnlinePost;
            // pasamos todos las propiedades del objeto
            setPostData({...newpost,tags: newpost.tags.join(' ')});
        }
        
    }, [postIdToUpdate,posts])

    return (
        <div className="form-section">
                <h1 className="text-center text-2xl font-bold">Creando una Memoria</h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:p-3">
               <FormInput
               type="text"
               name="creator"
               title="Creador"
               value={postData.creator}
               onChange={(s) => setPostData({...postData,creator:s})}
               />
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
                    <button className="px-4 py-3 bg-green-500 hover:bg-green-600 rounded-md">{`${!postIdToUpdate ? 'Submit': 'Update'}`}</button>
                    <button 
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-3 bg-red-500 hover:bg-red-600 rounded-md">{`${!postIdToUpdate ? 'Clear': 'Cancel'}`}</button>
                </div>
            </form>
        </div>
    )
}

export default Form
