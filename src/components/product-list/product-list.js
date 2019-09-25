import React from 'react';
import PropTypes from 'prop-types';
import Product from 'components/product-list/product';
import { Container } from './product-list.css';

const ProductList = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Product {...item} key={i} />
    ))}
  </Container>
);

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
