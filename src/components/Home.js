import React from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import FormRendering from './FormRendering';
import Functional from './Functional';
import ListRendering from './ListRendering';
import StateinclassComponent from './StateinclassComponent';
export default function Home() {
    return (
        <div>
          <BrowserRouter>
          <Routes>
           <Route path="/home" element ={<Main />}> </Route>
            <Route path="/Function" element={<Functional/>}></Route>
            <Route path="/login" element={<FormRendering/>}></Route>
            <Route path="/List" element={<ListRendering/>}></Route>
            <Route path="/state" elemnt={<StateinclassComponent />}></Route>


           

           
          </Routes>
          </BrowserRouter>   
        </div>
    )
}


function Main() {
    return (
        <>
        <h1>Home page</h1>
        <Link to="/login">login</Link>
        </>
    )
}