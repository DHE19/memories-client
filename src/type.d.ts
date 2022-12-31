
export interface IPostPagination{
    currentPage: number;
    data: IOnlinePost[]
    numberOfPages: number;
}
export interface IQuerySearch{
   search:string;
   tags:string;
}
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
   postIdToUpdate:string | null;
   currentPage:number;
   numberOfPages:number;
}

export interface IPost{
   //aquí debemos de añadir la propiedad name, para que se sepa quien es el autor, creator se le asginará el id
   name:string;
   title:string;
   message:string;
   tags:string[];
   selectedFile:string;
   likes: string[] = [];
}
export interface IOnlinePost extends IPost {
   creator:string;
   _id: string;
   createdAt:Date;
   __v:number
}

export type ILocalPost  = Omit<IPost,'likeCount' | 'tags' > & {tags:string}

type IPostActions = {
   type: 'CREATE' | 'FETCH_POST' | 'UPDATE' |'ID_SELECTED' | 'DELETE' | 'FETCH_BY_SEARCH';
   payload:Array<IOnlinePost> | string | IOnlinePost | null | IPostPagination;
}

interface IAuthActions {
   type: 'SIGNUP' | 'LOGIN' | 'LOGOUT';
   payload: ICredentials | null;
}

type DispatchType = (args:IPostActions) => IPostActions;
//cambiar el return
type DispatchAuthType = (args:IAuthActions) => IAuthActions;
