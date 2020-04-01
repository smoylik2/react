import React from "react";
import stl from './footer.module.css';

const Footer = (props) => {
    return(
        <div>
            <p className={stl.footer}>
                This is a {props.name} !
            </p>
        </div>
    );
}

export default Footer;