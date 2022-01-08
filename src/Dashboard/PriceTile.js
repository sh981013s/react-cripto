import { round } from 'lodash';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';

const numberFormat = (num) => {
  const formattedNum = +(num + '').slice(0, 7);
  return formattedNum >= 0 ? '+' + formattedNum + '%' : formattedNum + '%';
};

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig};
`;

const ChangePct = styled.div`
  color: ${(props) => (props.red ? 'red' : 'green')};
`;

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      display: grid;
      ${fontSize3};
      grid-gap: 5px;
      grid-template-columns: repeat(3, 1fr);
      justify-items: right;
    `}
`;

const PriceSingleTile = ({ sym, data }) => {
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <JustifyRight>
          <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
          </ChangePct>
        </JustifyRight>
      </CoinHeaderGridStyled>
      <TickerPrice>₩{round(data.PRICE, 2)}</TickerPrice>
    </PriceTileStyled>
  );
};

const PriceTileCompact = ({ sym, data }) => {
  return (
    <PriceTileStyled compact>
      <JustifyLeft>{sym}</JustifyLeft>
      <JustifyRight>
        <ChangePct red={data.CHANGEPCT24HOUR < 0}>
          {numberFormat(data.CHANGEPCT24HOUR)}
        </ChangePct>
      </JustifyRight>
      <div>₩{round(data.PRICE, 2)}</div>
    </PriceTileStyled>
  );
};

const PriceTile = ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]['KRW'];
  let TileClass = index < 5 ? PriceSingleTile : PriceTileCompact;
  return <TileClass sym={sym} data={data} />;
};

export default PriceTile;
