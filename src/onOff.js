import React, {useState} from "react";
import Style from './color.css'

const OnOff = () => {
    const [on, setOn] = useState(true);

    const toggle = () => setOn(!on);

    return(
        <div>
            
            <buton onClick={toggle}>{on ? 'ON'  : 'OFF'}</buton> |
        </div>
    );
};

export default OnOff;