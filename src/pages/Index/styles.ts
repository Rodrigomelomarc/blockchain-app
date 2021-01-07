import styled from 'styled-components';

interface CardProps {
  gridArea?: string;
}

export const Container = styled.section`
  max-width: 1261px;
  margin: 68px auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 30px;
  grid-template-areas:
    'select select select select'
    'price price price price'
    'blocks blocks transactions transactions';
`;

export const Card = styled.div<CardProps>`
  border-radius: 10px;
  background: rgba(150, 139, 223, 0.2) no-repeat;
  padding: 20px;
  grid-area: ${(props) => props.gridArea};
`;
