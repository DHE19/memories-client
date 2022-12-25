import axios from "axios";
import { IOnlinePost, IPost, IUserLogin, IUserRegister } from "../type";

const API = axios.create({baseURL:'http://localhost:5000'});

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost:IPost) =>  API.post('/posts',newPost);
// se actualiza el post
export const updatePost = (id:string, post:IOnlinePost) => API.patch(`/posts/${id}`,post);

export const deletePost = (id:string) => API.delete(`/posts/${id}`);

export const likePost = (id:string) => API.patch(`/posts/${id}/likePost`);


export const logIn = (formData:IUserLogin) => API.post('/user/login',formData);
export const signUp = (formData:IUserRegister) => API.post('/user/signup',formData);
