import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import Welcome from './WelcomeMessage';

function App() {
  return (
    <AppLayout>
      <AppBar />
      <Welcome />
    </AppLayout>
  );
}

export default App;
