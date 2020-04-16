import React from "react";
import stl from './productblock.module.css';

const Product_block = (props) => {
    let ProductScope = props.arrProduct;
    return(
        <div className={stl.block}>
            <ProductScope/>
        </div>
    );
}

export default Product_block;