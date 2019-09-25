import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import {
  FiInfo,
  FiShoppingCart,
  FiShoppingBag,
  FiHeart,
  FiUser,
} from 'react-icons/fi';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">
          <FiInfo />
          About
        </Link>
      </li>
      <li>
        <Link to="/camera">
          <FiHeart />
          Wishlist
        </Link>
      </li>
      <li>
        <Link to="/shop">
          <FiShoppingBag />
          Shop
        </Link>
      </li>
      <li>
        <Link to="#">
          <FiShoppingCart />
          Cart
        </Link>
      </li>
      <li>
        <Link to="#">
          <FiUser />
          Profile
        </Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
