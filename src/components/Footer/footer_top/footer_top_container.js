import React from "react";
import stl from './footer_top.module.scss';
import {saveMailActionCreator} from "../../../redux/footer_reducer";

const Footer_top = (props) => {

    let mailField = React.createRef();

    const saveEmail = () => {
        let inputText = mailField.current.value;
        let objSend = saveMailActionCreator(inputText);
        props.dispatch(objSend);
        mailField.current.value = '';
    };

    return(
        <div className={stl.block}>
            <div className={stl.form}>
                <div>
                    <label htmlFor={stl.email}>Sign Up For Exclusive Email Offers & More:</label>
                </div>
                <div>
                    <input type="email" className={stl.email}
                           placeholder='Email Address' ref={mailField}/>
                    <button onClick={saveEmail}>Sign Up</button>
                </div>
                <div className={stl.social}>
                    <div className={stl.img}><a href="#"></a></div>
                    <div className={stl.img}><a href="#"></a></div>
                    <div className={stl.img}><a href="#"></a></div>
                    <div className={stl.img}><a href="#"></a></div>
                    <div className={stl.img}><a href="#"></a></div>
                    <div className={stl.img}><a href="#"></a></div>
                </div>
            </div>
        </div>
    );
}

export default Footer_top;