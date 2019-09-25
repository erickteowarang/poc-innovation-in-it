import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 3rem;
  background: black;
  margin-bottom: 3.5rem;

  svg {
    color: white;
    height: 24px;
    width: 24px;
  }

  h1 {
    color: white;
    text-align: center;
  }

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  .custom-file-upload {
    height: 24px;

    input[type='file'] {
      display: none;
    }
  }
`;
