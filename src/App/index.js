import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Welcome from './WelcomeMessage';
import { AppProvider } from './AppProvider';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <Welcome />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
