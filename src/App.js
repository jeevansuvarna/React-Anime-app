import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import MainNavigation from './components/MainNavigation';
import { useState } from 'react';
import { searchContext } from './context/search'
import { SinglePage } from './pages/SinglePage';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  }
  const setSingle = (data) => {
    setSingleData(data);
  }


  return (
    <searchContext.Provider value={{ animeData, singleData, setData, setSingle }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/result/:id" element={<SinglePage />}>
            </Route>
          </Routes>
        </main>
      </Router>
    </searchContext.Provider>
  );
}

export default App;
