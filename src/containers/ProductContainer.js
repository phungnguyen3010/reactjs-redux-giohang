import React, { Component } from 'react';
import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as Actions from "./../actions/index";


class ProductContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.showProduct(products)}
      </Products>
    );
  }

  showProduct(products) {
    var result = '';
    var {onAddToCart, onChangeMessage} = this.props;
    if (products.length) {
      result = products.map((product, index) => {
        return <Product
          key={index}
          product={product}
          onAddToCart={onAddToCart}
          onChangeMessage = {onChangeMessage}
        />;
      })
    }
    return result;
  }
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired 
}

const mapStateToProps = state => {
  return (
    {
      products: state.products
    }
  );
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    onAddToCart: (product) =>{
      dispatch(Actions.actAddToCart(product, 1))
    },
    onChangeMessage : (message) =>{
      dispatch(Actions.actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
