import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './footer.css';
import Nav from 'components/footer/nav';

const Footer = () => (
  <Container>
    <Nav />
  </Container>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
