import React from "react";
import stl from './sliding_menu.module.scss';
import Sticky from "react-sticky-el";


const Sliding_menu = (props) => {

    let MadeRefsString = props.state.map( (obj) => {
        let DelSpace = (data) => {
            let newData = data.split(' ');
            newData = newData.map( (here) => {
                let firstChar = here.charAt(0);
                return here.replace(firstChar, firstChar.toUpperCase())
            })
            return newData.join('')
        }
        if (obj.content) {
            // return name + list + count
                return (<a href="#" id={stl[DelSpace(obj.name)]}>
                    {obj.name}<div><ul>{obj.content.map((arr,numb)=>{
                        let getCount;
                    if (obj.count){
                        getCount =  <span>{obj.count[numb]}</span>
                    }else{ getCount = '' }
                    return (<li key={DelSpace(arr)+numb}>
                        <input type="checkbox" id={stl[DelSpace(arr)]}
                               name={stl[DelSpace(arr)]}></input>
                        <label htmlFor={stl[DelSpace(arr)]}
                        >{arr} {getCount}</label>
                    </li>)})
                }</ul></div></a>);
        }else{//return only name
            return <a href="#" id={stl[DelSpace(obj.name)]}>{obj.name}</a>}
    })


    return(
        <Sticky stickyClassName={stl.StickyStl}>
            <div className={stl.block}>
                {MadeRefsString}
            </div>
        </Sticky>
    );
}

export default Sliding_menu;