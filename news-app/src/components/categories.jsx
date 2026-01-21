import { useState } from "react";
import Navbar12 from "./navbar";
import App from "../App";

function Categories(){
    const [category,setcategory]=useState("general");
    return(   
        <div>
             <Navbar12 setcategory={setcategory} />
             <App category={category} />
        </div>
    )
}
export default Categories