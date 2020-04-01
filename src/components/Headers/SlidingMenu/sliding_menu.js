import React from "react";
import stl from './footer_bottom.module.css';

const Footer_bottom = (props) => {
    return(
        <div className={stl.block}>
          <adress>© 2019-2020 Watchshop. All Rights Reserved.</adress>
            <div className={stl.links}>
                <a className={stl.href} href="#" title="Terms & Conditions">Terms & Conditions</a>
                <a className={stl.href} href="#" title="Privacy Policy">Privacy Policy</a>
                <a className={stl.href} href="#" title="Sitemap">Sitemap</a>
            </div>
        </div>
    );
}

export default Footer_bottom;