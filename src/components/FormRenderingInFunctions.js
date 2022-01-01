import React,{useState} from 'react';
import './FormRenderingFun.css';

export default function FormRenderingInFunctions() {
    let initialData={
        uname:"",
        pword:""
    }
    let  [values,updateValues]=useState(initialData);
    const changeUserName=(event) =>{
        updateValues({
         ...values,uname:event.target.value,
            
        })
    }
  const  changePword=(event) => {
        updateValues({
           ...values, pword:event.target.value,
            
        })
    }
const     submitUserData=(event) =>{
        event.preventDefault() 
            console.log(`${values.uname} ${values.pword}`)
        
    }
    


    return (
        <div className='demo'>
            
             <form onSubmit={submitUserData} method='get'>
                   
                   <label>Name:</label>
                   <input type="text" value={values.uname} 
                    onChange={changeUserName}
                   />
                   <br></br>
                   <label>Email:</label>
                   < input type="text" value={values.pword}
                     onChange={changePword}
                   />
                   <br></br>
                   <button type="submit">Login</button>
                   </form> 


        </div>
    )
}
