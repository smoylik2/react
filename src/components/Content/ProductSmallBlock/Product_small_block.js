import React from "react";
import stl from './content.module.css';

const Content = (props) => {
    return(
        <div className={stl.block}>
            <p className={stl.content}>
                This is a {props.name} !
            </p>
        </div>
    );
}

export default Content;