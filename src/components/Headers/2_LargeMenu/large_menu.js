import React from "react";
import stl from './large_menu.module.scss';
import ChatImage from '../../../image/live-chat-footer-ic-small.png'

const Large_menu = (props) => {
    return(
        <div className={stl.block}>
            <div className={stl.col}>
                <h3>CONTACT US</h3>
                <ul>
                    <li><a href="#">Customer Service</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Update Your Email Preferences</a></li>
                    <li><a href="#">Trade In Your Watch</a></li>
                </ul>
            </div>
            <div className={stl.col}>
                <h3>COMPANY INFO</h3>
                <ul>
                    <li><a href="#">About shop</a></li>
                    <li><a href="#">Sell to shop</a></li>
                    <li><a href="#">The Parlor: Our Blog</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Authenticity Guarantee</a></li>
                    <li><a href="#">Customer Reviews</a></li>
                    <li><a href="#">Coupon Codes</a></li>
                    <li><a href="#">Student Discount</a></li>
                </ul>
            </div>
            <div className={stl.col}>
                <h3>HELP CENTER</h3>
                <ul>
                    <li><a href="#">Order Information</a></li>
                    <li><a href="#">Shipping Options</a></li>
                    <li><a href="#">International Shipping</a></li>
                    <li><a href="#">Payment Options</a></li>
                </ul>
            </div>
            <div className={stl.col}>
                <h3>RETURNS & WARRANTY</h3>
                <ul>
                    <li><a href="#">Returns & Exchange Policy</a></li>
                    <li><a href="#">Returns Center</a></li>
                    <li><a href="#">Warranty Policy</a></li>
                    <li><a href="#">Warranty Repair Center</a></li>
                </ul>
            </div>
            <div className={stl.col}>
                <h3>CUSTOMER SERVICE</h3>
                <div className={stl.adress}>
                    <tl>
                        <tr>
                            <td className={stl.lcol}>Call Us</td>
                            <td className={stl.rcol}>877-834-1434</td>
                        </tr>
                        <tr>
                            <td className={stl.lcol}>Hours</td>
                            <td className={stl.rcol}>Mon–Thu 9am–6pm<br/>Fri 9am–3pm</td>
                        </tr>
                        <tr>
                            <td className={stl.lcol}>Address</td>
                            <td className={stl.rcol}>Brooklyn Army Terminal <br/>
                                                140 58th Street Suite 3B <br/>
                                                Brooklyn, NY 11220
                            </td>
                        </tr>
                    </tl>
                </div>
                <div className="chat">
                    <a href="#"><img src={ChatImage} alt=""/></a>
                </div>
            </div>
        </div>
    );
}

export default Large_menu;