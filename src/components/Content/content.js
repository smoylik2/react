import React from "react";
import stl from './headers.module.css';

const Headers = () => {
    return(
        <div>
            <p className={stl.header}>
                This is a header !
            </p>
        </div>
    );
}

export default Headers;