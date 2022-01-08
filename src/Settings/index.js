import Welcome from './WelcomeMessage';
import ConfirmButton from './ConfirmedButton';
import Page from '../Shared/Page';

const Settings = () => {
  return (
    <Page name="settings">
      <Welcome />
      <ConfirmButton />
    </Page>
  );
};

export default Settings;
