import { GoogleLogin,GoogleOAuthProvider  } from "@react-oauth/google";
import React from "react";



function Googlelogin(){
   return(
        <div>
        <GoogleOAuthProvider clientId="324911397506-0acae4ua3g4rsnjst11ikh1tfv5sgnu1.apps.googleusercontent.com">

        <GoogleLogin
        onSuccess={(credentialResponse)=>{
            console.log(credentialResponse )
        }}
        onError={()=>{
            console.log('Login Failed')
        }}
        />
        </GoogleOAuthProvider>
        
        </div>
    )
}
export default Googlelogin;