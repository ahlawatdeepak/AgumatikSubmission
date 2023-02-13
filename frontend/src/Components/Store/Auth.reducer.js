




// InitalState for all store --------------------------------------------------------------------------------------

import { AuthFail, AuthSuccess, Error, FetchQueryData, Loading } from "./Auth.types"

const initalState={
     
      auth:false,
      autherror:false,
      loading:false,
      error:false,
      queryData:[]
     
}


// Reducer for Store --------------------------------------------------------------------------------------

export const AuthReducer=(state=initalState,{type,payload})=>{
        
     switch (type){
         
        case AuthSuccess :{
            return{
                ...state,
                auth:true,
                autherror:false,
               
            }
        }
        case AuthFail :{
            return {
                ...state,
                auth:false,
                autherror:true,
            }
        }
        case Loading :{
            return{
                ...state,
                loading:true,
                error:false,
                autherror:false,
            }
        }

        case Error :{
            return {
                ...state,
                loading:false,
                error:true,
                autherror:false,
            }
        }

        case FetchQueryData :{
            return {
                ...state,
                loading:false,
                error:false,
                queryData:payload
            }
        }

        default : {
            return state
        }

     }
      
}