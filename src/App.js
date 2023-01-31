import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu'
import { CaffeProvider } from './ContextProvider';

function App() {
  return (
    <div className="App">
      <CaffeProvider>
        <Header />
        <Menu />
      </CaffeProvider>
    </div>
  );
}

export default App;
