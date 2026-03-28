import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams, fetchPlayers, setSelectedTeam, toggleFavorite } from '../../store/index';
import TeamFlag from '../../components/TeamFlag.jsx';
import './TeamsDetails.css';

const TeamsDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { teams, selectedTeam } = useSelector(state => state.teams);
  const { players } = useSelector(state => state.players);
  const { favoriteTeams } = useSelector(state => state.favorites);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    if (teams.length === 0) {
      dispatch(fetchTeams());
    }
    if (players.length === 0) {
      dispatch(fetchPlayers());
    }
  }, [dispatch, teams.length, players.length]);

  useEffect(() => {
    const team = teams.find(t => t.id === parseInt(id));
    if (team) {
      dispatch(setSelectedTeam(team));
      const playersForTeam = players.filter(p => p.team_id === parseInt(id));
      setTeamPlayers(playersForTeam);
    }
  }, [id, teams, players, dispatch]);

  const handleToggleFavorite = () => {
    if (selectedTeam) {
      dispatch(toggleFavorite(selectedTeam.id));
    }
  };

  if (!selectedTeam) {
    return <div className="loading">Chargement...</div>;
  }

  const isFavorite = favoriteTeams.includes(selectedTeam.id);

  return (
    <div className="team-details">
      <Link to="/teams" className="back-btn">← Retour aux équipes</Link>
      
      <div className="team-header-detail">
        <TeamFlag 
          src={selectedTeam.flagUrl} 
          alt={`Drapeau ${selectedTeam.name}`} 
          className="team-flag-large"
          teamName={selectedTeam.name}
        />
        <div className="team-info-detail">
          <h1>{selectedTeam.name}</h1>
          <button
            onClick={handleToggleFavorite}
            className={`favorite-btn-large ${isFavorite ? 'favorited' : ''}`}
          >
            {isFavorite ? '❤️ Retirer des favoris' : '🤍 Ajouter aux favoris'}
          </button>
        </div>
      </div>

      <div className="team-stats">
        <div className="stat-card">
          <h3>Coach</h3>
          <p>{selectedTeam.coach}</p>
        </div>
        <div className="stat-card">
          <h3>Classement FIFA</h3>
          <p>#{selectedTeam.ranking}</p>
        </div>
        <div className="stat-card">
          <h3>Joueurs</h3>
          <p>{teamPlayers.length}</p>
        </div>
      </div>

      <div className="players-section">
        <h2>Joueurs de l'équipe</h2>
        {teamPlayers.length > 0 ? (
          <div className="players-grid">
            {teamPlayers.map(player => (
              <div key={player.id} className="player-card">
                <h4>{player.name}</h4>
                <p><strong>Position:</strong> {player.position}</p>
                <p><strong>Buts:</strong> {player.goals}</p>
                <p><strong>Passes décisives:</strong> {player.assists}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Aucun joueur disponible pour cette équipe.</p>
        )}
      </div>
    </div>
  );
};

export default TeamsDetails;