import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TeamsList from './features/teams/TeamsList.jsx';
import TeamsDetails from './features/teams/TeamsDetails.jsx';
import MatchesList from './features/teams/matches/MatchesList.jsx';
import Favorites from './features/favorites/Favorites.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<TeamsList />} />
          <Route path="/teams" element={<TeamsList />} />
          <Route path="/teams/:id" element={<TeamsDetails />} />
          <Route path="/matches" element={<MatchesList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;