import React from "react";
import stl from './shop_info.module.scss';
import ShopLogo from '../../../image/logo_2019_20.png';
import ChatIcon from '../../../image/chat_icon.png';

const Shop_info = (props) => {
    return(
        <div className={stl.block}>
            <div className={stl.call}>
                <a href="#" title='chat'>
                    <img src={ChatIcon} alt="Go to chat!" className={stl.chaticon}
                    width='30px'/>
                    <span>CHAT</span>
                </a>
                <span>or</span>
                <a href="tel://1-877-834-1434">
                    CALL (877) 834-1434
                </a>
            </div>
            <div className={stl.logo}>
                <a href='#'><img src={ShopLogo} alt="Watch Shop"/>
                </a></div>
            <div className={stl.search}>
                <input type="text" placeholder='Search by brand or model'/>
                <button><div className={stl.search_logo}></div></button>
            </div>
            
        </div>
    );
}

export default Shop_info;