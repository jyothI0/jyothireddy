import React from 'react'

export default function ListRendering() {

    // let emlist=["Jyothi","sai","shyam","aruna"]
     
    let emplist=[
        {
            name:"Jyothi Reddy",
            salary:70000,
            email:"jyo12@gmail.com"
        },
        {
            name:"shyam",
            salary:50000,
            email:"shyam@34"
        },
        {
            name:"sai",
            salary:50000,
            email:"sai28@gmail.com"
        }
    ]







    return (
        <div>
            <h1> 
                List  Rendering...</h1> 
                {/* {
                emlist.map(element =>(
                    <h1> {element }</h1>
                )) } */}
                {
                emplist.map(
                    empdata => 
                        <>
                        <p>{empdata.name}</p>
                        <p>{empdata.salary}</p>
                        <p>{empdata.email}</p>
                        </>
                    
                )
}
    
        </div>
    )
}
