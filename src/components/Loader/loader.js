import React from "react";
import stl from './footer_links.module.css';
import ChatImage from '../../../image/live-chat-footer-ic-small.png'
import {NavLink} from "react-router-dom";

let objAllData = {
    companyInfo:{name:'Company Info',arr:['About shop','Sell to shop','The Parlor: Our Blog',
            'Affiliate Program','Authenticity Guarantee','Customer Reviews',
            'Coupon Codes','Student Discount']},
    helpCenter:{name:'help Center',arr:['Order Information','Shipping Options','International Shipping',
        'Payment Options']},
    returnsWarranty:{name:'returns & Warranty',
        arr:['Returns & Exchange Policy','Returns Center',
        'Warranty Policy','Warranty Repair Center']}
}

const FooterColumn = (props) => {
    let newData = props.arrData.map( (link) => {
        return (<li><a href="#">{link}</a></li>)
        })
    return (
        <div className={stl.col}>
            <h3>{props.title}</h3>
            <ul>
                {newData}
            </ul>
        </div>
    )
}

const Footer_links = (props) => {
    return(
        <div className={stl.block}>
            <div className={stl.col}>
                <h3>CONTACT US</h3>
                <ul>
                    <li><NavLink to="/navigation" activeClassName={stl.activ}>Customer Service</NavLink></li>
                    <li><NavLink to="/content" activeClassName={stl.activ}>Order Status</NavLink></li>
                    <li><a href="#">Update Your Email Preferences</a></li>
                    <li><a href="#">Trade In Your Watch</a></li>
                </ul>
            </div>
            <FooterColumn title={objAllData.companyInfo.name}
                          arrData={objAllData.companyInfo.arr}/>
            <FooterColumn title={objAllData.helpCenter.name}
                          arrData={objAllData.helpCenter.arr}/>
            <FooterColumn title={objAllData.returnsWarranty.name}
                          arrData={objAllData.returnsWarranty.arr}/>
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
                    <a href="#"><img className={stl.ChatButton} src={ChatImage} alt=""/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer_links;