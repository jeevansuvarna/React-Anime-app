import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import MainNavigation from './components/MainNavigation';
import { useState } from 'react';
import { searchContext } from './context/search'
import { SinglePage } from './pages/SinglePage';
import axios from 'axios';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  }
  const setSingle = (data) => {
    setSingleData(data);
  }

  const search = async (searchTerm) => {
    return await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=20`
    ).then((res) => res.json())
  }

  const topAnimes = () => {
    return fetch(
      `https://api.jikan.moe/v4/top/anime?limit=12`
    ).then((res) => res.json())
  }
  const popular = () => {
    return fetch(
      `https://api.jikan.moe/v4/watch/promos/popular?limit=6`
    ).then((res) => res.json())
  }

  const getAnimeById = (id) => {
    axios.get(
      `https://api.jikan.moe/v4/anime/${id}`
    ).then(res => { return res.data })
  }
  return (
    <searchContext.Provider value={{ animeData, singleData, search, topAnimes, setData, setSingle, popular, getAnimeById }}>
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
