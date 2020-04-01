import React from "react";
import stl from './headers.module.css';

const Headers = (props) => {
    return(
        <div>
            <p className={stl.header}>
                This is a {props.name} !
            </p>
        </div>
    );
}

export default Headers;