import axios from "axios";
import { IOnlinePost, IPost, IQuerySearch, IUserLogin, IUserRegister } from "../type";
import {getUserProfile} from '../utils/localStore'
const API = axios.create({baseURL:'http://localhost:5000'});



API.interceptors.request.use((req) =>{
    const token = getUserProfile()?.token;
    if(token){
        req!.headers!.Authorization = `Bearer ${token}`
    }
    
    return req
});


export const fetchPostsPage = (page:number) => API.get(`/posts?page=${page}`);
export const fetchPosts = () => API.get('/posts');
export const fetchPostsBySearch = (query:IQuerySearch) => API.get(`/posts/search?searchQuery=${query.search}&tags=${query.tags}`);
export const createPost = (newPost:IPost) =>  API.post('/posts',newPost);
// se actualiza el post
export const updatePost = (id:string, post:IOnlinePost) => API.patch(`/posts/${id}`,post);
export const deletePost = (id:string) => API.delete(`/posts/${id}`);
export const likePost = (id:string) => API.patch(`/posts/${id}/likePost`);


export const logIn = (formData:IUserLogin) => API.post('/user/login',formData);
export const signUp = (formData:IUserRegister) => API.post('/user/signup',formData);
