import './App.css';
import HeaderMenu from './components/HeaderMenu';
import MainPage from './components/MainPage';
import TenderForm from './components/TenderForm';
import ActualTenders from './components/ActualTenders';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/przetargi/dodaj" element={<TenderForm/>}/>
        <Route path="/przetargi/aktualne" element={<ActualTenders/>}/>
        <Route path='*' exact={true} element={<MainPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
