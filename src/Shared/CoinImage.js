import styled, { css } from 'styled-components';

const CoinImageStyled = styled.img`
  height: 50px;
  ${(props) =>
    props.spotlight &&
    css`
      height: 200px;
      display: block;
      margin: auto;
    `}
`;

const CoinImage = ({ coin, spotlight }) => {
  return (
    <CoinImageStyled
      spotlight={spotlight}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.CoinSymbol}
    />
  );
};

export default CoinImage;
