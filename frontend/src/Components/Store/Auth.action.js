
import { AuthFail, AuthSuccess, Error, FetchQueryData, Loading} from "./Auth.types"
import axios from "axios"


// Login user and get response --------------------------------------------------------------------------------------
export const LoginApi=(creds)=>async(dispatch)=>{
  
   try {
        
       let res=await axios.post(`https://long-puce-newt-sari.cyclic.app/admin`,creds)
       console.log(res)
        dispatch({
           type:AuthSuccess,
           
        })
   } catch (error) {
       dispatch({
          type:AuthFail
       })
   }
    
}


export const QueryApi=(creds)=>async()=>{
  
    try {
         
        let res=await axios.post(`https://long-puce-newt-sari.cyclic.app/query`,creds)
        console.log(res)
        if(res){
            alert("Details uploaded Successfully")
        }
        
        
    } catch (error) {
        console.log(error)
    }
     
 }
 

// Fetch the all book data in Url --------------------------------------------------------------------------------------


export const QueryDataApi=()=>async(dispatch)=>{
    dispatch({
        type:Loading
     })
        try {
              let res=await axios.get(`https://long-puce-newt-sari.cyclic.app/query`)
            //   console.log(res)
              dispatch({
                  type:FetchQueryData,
                  payload:res.data.data
              })
        } catch (error) {
            dispatch({
               type:Error
            })
        }
    
 }

