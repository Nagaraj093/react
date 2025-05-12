import React, { useEffect } from "react";

function DelayedAlert() {
    useEffect(() => {
        const timer = setTimeout(() => {
        alert("HELLO AFTER 3 SECOND");
    },3000);

    return () => clearTimeout(timer);
}, []);

return <h2>wait for the alert..</h2>;
    }

export default DelayedAlert;
