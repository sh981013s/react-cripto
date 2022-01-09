import { round } from 'lodash';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { greenBoxShadow, fontSize3, fontSizeBig } from '../Shared/Styles';
import { CoinHeaderGridStyled } from '../Settings/CoinHeaderGrid';
import { AppContext } from '../App/AppProvider';

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

  ${(props) =>
    props.currentFavorite &&
    css`
      ${greenBoxShadow};
      pointer-events: none;
    `}
`;

const PriceSingleTile = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite,
}) => {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      currentFavorite={currentFavorite}
    >
      <CoinHeaderGridStyled>
        <div>{sym}</div>
        <JustifyRight>
          <ChangePct red={data.CHANGEPCTHOUR < 0}>
            {numberFormat(data.CHANGEPCTHOUR)}
          </ChangePct>
        </JustifyRight>
      </CoinHeaderGridStyled>
      <TickerPrice>₩{round(data.PRICE, 2)}</TickerPrice>
    </PriceTileStyled>
  );
};

const PriceTileCompact = ({
  sym,
  data,
  currentFavorite,
  setCurrentFavorite,
}) => {
  return (
    <PriceTileStyled
      onClick={setCurrentFavorite}
      compact
      currentFavorite={currentFavorite}
    >
      <JustifyLeft>{sym}</JustifyLeft>
      <JustifyRight>
        <ChangePct red={data.CHANGEPCTHOUR < 0}>
          {numberFormat(data.CHANGEPCTHOUR)}
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
  return (
    <AppContext.Consumer>
      {({ currentFavorite, setCurrentFavorite }) => (
        <TileClass
          sym={sym}
          data={data}
          currentFavorite={currentFavorite === sym}
          setCurrentFavorite={() => setCurrentFavorite(sym)}
        />
      )}
    </AppContext.Consumer>
  );
};

export default PriceTile;
