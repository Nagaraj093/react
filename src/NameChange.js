import React from "react";
import { useState } from "react";


function NameChanger(){
    const [name,setName] = useState("PYTHON")
    const changeName = () => setName("JAVA")
    return(
        <div>
            <h2>name:{name}</h2>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}

export default NameChanger;