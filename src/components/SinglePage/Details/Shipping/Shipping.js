import React from "react";
import stl from './guarantee.module.scss';

export default (props) => {
    return (
        <div className={stl.block}>
            <div className={stl.section}>
                <h3 className={stl.titles}>THE SHOP GUARANTEE</h3>
                <ul className={stl.lists}>
                    <li>Shop guarantees you the utmost in quality, authenticity, and reputability</li>
                    <li>30 Day Money Back Guarantee</li>
                    <li>No restocking fee on items under $4000</li>
                    <li>All our watches have the original manufacturer's serial numbers intact.</li>
                    <li>1 to 5 Year Warranty on all watches</li>
                </ul>
            </div>
            <div className={stl.section}>
                <h3 className={stl.titles}>30 DAY MONEY BACK GUARANTEE</h3>
                <p>At Shop.com, your complete satisfaction is important to us. If for any reason you are not 100%
                    satisfied with your purchase simply create an RMA & send your item back to shop in its new,
                    unused condition, with original packaging and we will be happy to provide you with either a full
                    refund of the purchase price or a store credit toward an exchange (excluding shipping & handling
                    charges). Some conditions may apply. Please read our full return policy.</p>
                <br/>
                <p>Our Products:</p>
                <ul className={stl.lists}>
                    <li>are authentic, never worn, in the original box with manuals.</li>
                    <li>have the original manufacturer's serial numbers intact.</li>
                    <li>watches have a 1 to 5 year warranty program (see our warranty section for details).</li>
                </ul>
            </div>
            <div className={stl.section}>
                <h3 className={stl.titles}>YOUR INFORMATION IS SAFE & SECURE</h3>
                <p>Your comfort, security and confidence are our utmost concern. All transactions are digitally
                    encrypted using the latest technologies. We never share any of your information.</p>
            </div>
        </div>
    );
}