import React from 'react';

function Button({buttoncolor,buttonText}){

   
//buttoncolor,buttontext
    return(
    <>
         <button style={{color:buttoncolor,borderRadius:'2px'}}>{buttonText}</button>
        </>
    )
}

export default Button;