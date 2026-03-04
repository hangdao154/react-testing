import './App.css';
import { MuiMode } from './components/mui/MuiMode';
import { Users } from './components/users/Users';
import { AppProviders } from './providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
