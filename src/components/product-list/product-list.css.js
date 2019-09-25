import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  padding: 0 2rem;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  `};

  ${MEDIA.PHONE`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    > * {
      width: 46%;
    }
  `};
`;
