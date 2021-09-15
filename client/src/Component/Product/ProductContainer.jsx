import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import {requestProducts} from '../../Redux/productReducer';




class ProductContainer extends React.Component {

    componentDidMount() {
        this.props.requestProducts();
    }

    render() {
        return <>
        <Product 
        products = {this.props.products}
        requestProducts = {this.props.requestProducts}/>
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        products: state.productPage.products,
    }
};

export default connect(mapStateToProps, {requestProducts})(ProductContainer); 