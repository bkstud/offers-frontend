import './App.css';
import HeaderMenu from './components/HeaderMenu';
import MainPage from './components/MainPage';
import TenderForm from './components/TenderForm';
import ActualTenders from './components/ActualTenders';
import {Route, Routes} from 'react-router-dom';
import TenderDetails from './components/TenderDetails';
import TenderOffer from './components/TenderOffer';
import FinishedTenders from './components/FinishedTenders';
import TenderResults from './components/TenderResults';

function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/przetargi/dodaj" element={<TenderForm/>}/>
        <Route path="/przetargi/aktualne" element={<ActualTenders/>}/>
        <Route path="/przetargi/aktualne/:id" element={<TenderDetails/>}/>
        <Route path="/przetargi/aktualne/oferta/:id" element={<TenderOffer/>}/>
        <Route path="/przetargi/zakonczone" element={<FinishedTenders/>}/>
        <Route path="/przetargi/zakonczone/:id" element={<TenderResults/>}/>

        <Route path='*' exact={true} element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
