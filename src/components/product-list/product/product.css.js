import styled from 'styled-components';
import Modal from 'containers/modal';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 500;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 1.2rem 0 1.3rem;
  line-height: 1.25;
`;

export const Container = styled.div``;

export const ModalRow = styled.div`
  padding: 1rem 0;

  p {
    margin-bottom: 0;
  }

  .price {
    float: right;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 4rem;
`;

export const ProductText = styled.div`
  width: 100%;
`;

export const ProductModal = styled(Modal)`
  width: 30%;
`;
