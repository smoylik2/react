import React from "react";
import {connect} from "react-redux";
import ProductBlock from "./Product_block";
import {loadMoreAction, setStateAction} from "../../../redux/content_reducer";
import * as axios from "axios";
import Loader from "../../Loader/loader"


class ProductBlockContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`http://127.0.0.1:3001/api/data`)
            .then( (res) => {
                this.props.setStateAction([...res.data])
                //console.log(res)
            });
    }

    render() {
        return <>
            {this.props.arrForView.length < 1 ? <Loader/> : <ProductBlock {...this.props}/>}
        </>
    }
}


let mapStateToProps = (state) => {
    let arrForView = state.content.viewState.viewed.map( (id) => {

        let theArray = state.content.product;
        let newObjToReturn;

        for(let element in theArray){
            if (theArray[element].id == id) {
                newObjToReturn = {
                    id: id,
                    imgLink: `/product_image/${theArray[element].arrImage[0]}`,
                    brand: theArray[element].information.Brand,
                    fullname: theArray[element].fullName,
                    price: theArray[element].price
                };
                break
            }
        }

        return newObjToReturn;
    });

    let viewNext = Boolean(state.content.viewState.nextToView.length);

    return {
        arrForView: arrForView,
        viewNext: viewNext
    }
};

export default connect(mapStateToProps, {})(ProductBlockContainer );