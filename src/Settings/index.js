import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

const Settings = () => {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
};

export default Settings;
