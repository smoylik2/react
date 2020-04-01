import React from "react";
import stl from './three_col_baner.module.scss';

const Three_col_baner = (props) => {
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

export default Three_col_baner;