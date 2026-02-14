import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TeamsList from './features/teams/TeamsList.jsx';
import TeamsDetails from './features/teams/TeamsDetails.jsx';
import MatchesList from './features/teams/matches/MatchesList.jsx';
import Favorites from './features/favorites/Favorites.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <main className="main-content">
              <TeamsList />
            </main>
          </>
        } />
        <Route path="/teams" element={
          <main className="main-content">
            <TeamsList />
          </main>
        } />
        <Route path="/teams/:id" element={
          <main className="main-content">
            <TeamsDetails />
          </main>
        } />
        <Route path="/matches" element={
          <main className="main-content">
            <MatchesList />
          </main>
        } />
        <Route path="/favorites" element={
          <main className="main-content">
            <Favorites />
          </main>
        } />
      </Routes>
    </div>
  );
}

export default App;