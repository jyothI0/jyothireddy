import React,{useState}from 'react'

export default function StatesInFunctionalcomponent() {
    // let [name,updateName]=useState("jyothi")
    // return (
    //     <div>
    //         <h1
    //             onMouseOver={()=> { updateName("JyothiReddy")}}>
    //             {name}
    //         </h1>
            let [name,updateName]=useState(0)
    return (
        <div>
            <h1
                onMouseOver={()=> { updateName(name+1)}}>
                {name}
            </h1>
        </div>
    )
}
