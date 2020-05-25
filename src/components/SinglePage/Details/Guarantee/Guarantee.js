import React from "react";
import stl from './details.module.scss';

export default (props) => {

    const nextTab = (t) => {
        if (t.target.className !== stl.tabs) return;// if not a button than exit
        let active = t.currentTarget.getElementsByClassName(stl.active)[0];
        active.className = active.className// remove active element
            .replace(stl.active, '')// del active in clName
            .trim();// del spaces
        t.target.className = `${stl.tabs} ${stl.active}`//set new active el
    };

    return(
        <div className={stl.block} onClick={nextTab.bind(this)}>
            <div className={`${stl.tabs} ${stl.active}`}>
                Details
                <div className={stl.tabContent}>111</div>
            </div>
            <div className={stl.tabs}>
                Shipping
                <div className={stl.tabContent}>222</div>
            </div>
            <div className={stl.tabs}>
                Guarantee
                <div className={stl.tabContent}>
                    333
                </div>
            </div>
        </div>
    );
}