import React from 'react';
import PropTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import { FiMenu, FiCamera } from 'react-icons/fi';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

// Fake the scan/upload process
const fakeUpload = () => {
  setTimeout(() => {
    navigate('/shop');
  }, 2000);
};

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <FiMenu />
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <label className="custom-file-upload" onChange={fakeUpload}>
        <input type="file" accept="image/*" id="file-input" />
        <FiCamera />
      </label>
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
