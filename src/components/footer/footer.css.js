import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background: white;
  border-top: 1px solid #efefef;

  nav {
    width: 100%;
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: inherit;
    }
  }
`;
