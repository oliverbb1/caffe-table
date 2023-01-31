import './App.css';
import Header from './Components/Header';
import { CaffeProvider } from './ContextProvider';

function App() {
  return (
    <div className="App">
      <CaffeProvider>
        <Header />
      </CaffeProvider>
    </div>
  );
}

export default App;
