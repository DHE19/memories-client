export interface ICredentials{

   result:{
      name:string; 
      email: string;
      password: string;
      _id:string;
   }
   token:string;

}
export interface IUserLogin{
   email:string;
   password:string
}

export interface IUserRegister extends IUserLogin{
   name:string;
}


export interface IAuthState {
   user: ICredentials | null
}
export interface IState{
   posts:Array<IOnlinePost>;
   postIdToUpdate:string | null
}

export interface IPost{
   title:string;
   message:string;
   creator:string;
   tags:string[];
   selectedFile:string;
   likeCount: Number = 0;
   
}
export interface IOnlinePost extends IPost {
   _id: string;
   createdAt:Date;
   __v:number
}

export type ILocalPost  = Omit<IPost,'likeCount' | 'tags' > & {tags:string}

type IPostActions = {
   type: 'CREATE' | 'FETCH_ALL' | 'UPDATE' |'ID_SELECTED' | 'DELETE';
   payload:Array<IOnlinePost> | string | IOnlinePost | null;
}

interface IAuthActions {
   type: 'SIGNUP' | 'LOGIN' | 'LOGOUT';
   payload: ICredentials | null;
}

type DispatchType = (args:IPostActions) => IPostActions;
//cambiar el return
type DispatchAuthType = (args:IAuthActions) => IAuthActions;
