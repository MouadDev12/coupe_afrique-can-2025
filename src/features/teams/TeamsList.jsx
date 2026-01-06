import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTeams, toggleFavorite } from '../../store/index';
import TeamFlag from '../../components/TeamFlag.jsx';
import teamsData from '../../data/teams.json';
import './TeamsList.css';

const TeamsList = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector(state => state.teams);
  const { favoriteTeams } = useSelector(state => state.favorites);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(setTeams(teamsData));
  }, [dispatch]);

  const handleToggleFavorite = (teamId) => {
    dispatch(toggleFavorite(teamId));
  };

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="teams-list">
      <div className="teams-header">
        <h1>Équipes CAN 2025</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher une équipe..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="teams-grid">
        {filteredTeams.map(team => (
          <div key={team.id} className="team-card">
            <div className="team-header">
              <TeamFlag 
                src={team.flagUrl} 
                alt={`Drapeau ${team.name}`} 
                className="team-flag"
                teamName={team.name}
              />
              <h3>{team.name}</h3>
              <button
                onClick={() => handleToggleFavorite(team.id)}
                className={`favorite-btn ${favoriteTeams.includes(team.id) ? 'favorited' : ''}`}
              >
                {favoriteTeams.includes(team.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div className="team-info">
              <p><strong>Coach:</strong> {team.coach}</p>
              <p><strong>Classement FIFA:</strong> {team.ranking}</p>
            </div>
            <Link to={`/teams/${team.id}`} className="team-details-btn">
              Voir détails
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsList;