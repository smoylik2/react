import React from "react";
import stl from './singlepage.module.scss';

const Single_page = (props) => {
    return(
        <div>
            <p className={stl.navigation}>
                This is a {props.name} !
            </p>
        </div>
    );
}

export default Single_page;