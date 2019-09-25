import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

const ModalContainer = ({ children, text }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal
        open={open}
        showModal={showModal}
        hideModal={hideModal}
        text={text}
      >
        {children}
      </Modal>
    )}
  </Consumer>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

export default ModalContainer;
