import './App.css';
// import Guest from './Components/Guest';
import Header from './Components/Header';
import Menu from './Components/Menu'
import Tabels from './Components/Tabels';
import TotalProfit from './Components/TotalProfit';
// import ManageGuest from './Components/ManageGuest'
import { CaffeProvider } from './ContextProvider';

function App() {
  return (
    <div className="App">
      <CaffeProvider>
        <Header />
        <Menu />
        <Tabels />
        {/* <Guest /> */}
        {/* <ManageGuest /> */}
        <TotalProfit />
      </CaffeProvider>
    </div>
  );
}

export default App;
