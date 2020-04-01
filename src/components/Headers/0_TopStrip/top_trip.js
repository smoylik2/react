import React from "react";
import stl from './top_trip.module.scss';

const Top_trip = (props) => {
    return(
        <div className={stl.back}>
            <div className={stl.block}>
                <button className={stl.l_button}><div className={stl.arrow}></div></button>
                <div className={stl.content}></div>
                <button className={stl.r_button}><div className={stl.arrow}></div></button>
            </div>
        </div>
    );
}

export default Top_trip;