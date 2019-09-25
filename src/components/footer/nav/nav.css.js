import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
      flex: 0 1 20%;
      text-align: center;
      text-transform: uppercase;
      font-size: 1.3rem;

      a {
        display: block;
        padding: 1.6rem 0;

        svg {
          display: block;
          width: 2.2rem;
          height: 2.2rem;
          margin: 0 auto 0.9rem;
        }
      }

      // & + li {
      //   margin-left: 2rem;
      // }
    }
  }
`;
