import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

 const PrivateRoute = ({IsLogin,children}) => {
  
       {
        if(IsLogin){
            return children;
        }else{
            return <Navigate to="/login"></Navigate>
        }
       }
   
}

export default PrivateRoute
