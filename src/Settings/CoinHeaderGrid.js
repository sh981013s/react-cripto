import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export const DeleteIcon = styled.div`
  justify-self: right;
  color: red;
  visibility: hidden;
  ${DeletableTile}:hover & {
    visibility: visible;
  }
`;

const CoinHeaderGrid = ({ name, symbol, topSection }) => {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>X</DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
};

export default CoinHeaderGrid;
