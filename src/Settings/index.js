import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';

const Settings = () => {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
};

export default Settings;
