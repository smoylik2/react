import React from "react";
import stl from './details.module.scss';

export default (props) => {
    return (
        <div className={stl.block}>
            <div className={stl.section}>
                <h3 className={stl.titles}>DOMESTIC SHIPPING POLICY</h3>
                <table>
                    <thead className={stl.thead}>
                    <tr>
                        <td className={stl.firstCol}>LOCATION</td>
                        <td className={stl.secondCol}>SHIPPING METHOD</td>
                        <td className={stl.thirdCol}>PRICE</td>
                    </tr>
                    </thead>

                    <tbody>
                    <tr className={stl.tline}>
                        <td className={stl.firstCol}
                        >Continental US - Order under $100</td>
                        <td className={stl.secondCol}>Economy</td>
                        <td className={stl.thirdCol}>$5.99</td>
                    </tr>
                    <tr className={stl.tline}>
                        <td className={stl.firstCol}
                        >Continental US - Order over $100</td>
                        <td className={stl.secondCol}>Economy</td>
                        <td className={stl.thirdCol}>FREE</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <p>Air and ground shipment time frames are business days only, and exclude weekends and/or holidays.
                    Orders
                    outside the 48 continental States require Second Day or Next Day Air service.</p>
            </div>
            <div className={stl.section}>
                <h3 className={stl.titles}>INTERNATIONAL SHIPPING & DUTY CHARGES</h3>
                <p>shop.com does not assess duties for international orders and they are subsequently subject to
                    applicable customs, import duties and taxes, which are the sole responsibility of the customer.
                    Please contact your local customs office for details.</p>
                <br/>
                <p>For more information on International Shipping policies, please visit International Shipping.</p>
            </div>

        </div>
    );
}