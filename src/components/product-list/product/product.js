import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {
  Title,
  Copy,
  ProductText,
  Container,
  Description,
  ModalRow,
} from './product.css';
import Modal from 'containers/modal';

const Product = ({ title, copy, price, image }) => (
  <Container>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <Description>
      <ProductText>
        <Title>{title}</Title>
        <Copy>{price}</Copy>
      </ProductText>
      <Modal text="Get Now">
        <ModalRow>
          <p>
            From Target: <span className="price">$249.00</span>
          </p>
        </ModalRow>
        <ModalRow>
          <p>
            From The Iconic: <span className="price">$269.00</span>
          </p>
        </ModalRow>
        <ModalRow>
          <p>
            From MYER: <span className="price">$299.00</span>
          </p>
        </ModalRow>
        <h3>Alternatives:</h3>
      </Modal>
    </Description>
  </Container>
);

Product.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  price: PropTypes.string,
};

export default Product;
