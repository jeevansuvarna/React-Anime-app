import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import MainNavigation from './components/MainNavigation';
import { useState } from 'react';
import { searchContext } from './context/search'
import { SinglePage } from './pages/SinglePage';
import { Search } from './pages/Search';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});
  const [searchData, setSearchData] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  }
  const setSingle = (data) => {
    setSingleData(data);
  }
  const setSearch = (data) => {
    setSearchData(data)
  }



  return (
    <searchContext.Provider value={{ searchData, animeData, singleData, setData, setSingle, setSearch }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/result/:id" element={<SinglePage />}>
            </Route>
            <Route path="/results/:id" element={<Search />}>
            </Route>
          </Routes>
        </main>
      </Router>
    </searchContext.Provider>
  );
}

export default App;
