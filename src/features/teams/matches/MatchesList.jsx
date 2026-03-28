import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatches, fetchTeams } from '../../../store/index';
import './MatchesList.css';

const MatchesList = () => {
  const dispatch = useDispatch();
  const { matches } = useSelector(state => state.matches);
  const { teams } = useSelector(state => state.teams);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchMatches());
    dispatch(fetchTeams());
  }, [dispatch]);

  const getTeamName = (teamId) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.name : 'Équipe inconnue';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredMatches = matches.filter(match => {
    const teamA = getTeamName(match.teamA_id);
    const teamB = getTeamName(match.teamB_id);
    const venue = match.venue;
    
    return teamA.toLowerCase().includes(searchTerm.toLowerCase()) ||
           teamB.toLowerCase().includes(searchTerm.toLowerCase()) ||
           venue.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="matches-list">
      <div className="matches-header">
        <h1>Matchs CAN 2025</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Rechercher par équipe ou stade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="matches-container">
        {filteredMatches.length > 0 ? (
          filteredMatches.map(match => (
            <div key={match.id} className="match-card">
              <div className="match-date">
                {formatDate(match.date)}
              </div>
              <div className="match-teams">
                <div className="team-match">
                  <span className="team-name">{getTeamName(match.teamA_id)}</span>
                  <span className="team-score">{match.scoreA}</span>
                </div>
                <div className="match-vs">VS</div>
                <div className="team-match">
                  <span className="team-score">{match.scoreB}</span>
                  <span className="team-name">{getTeamName(match.teamB_id)}</span>
                </div>
              </div>
              <div className="match-venue">
                📍 {match.venue}
              </div>
              <div className="match-status">
                {match.scoreA === 0 && match.scoreB === 0 ? 
                  <span className="status-upcoming">À venir</span> : 
                  <span className="status-finished">Terminé</span>
                }
              </div>
            </div>
          ))
        ) : (
          <p className="no-matches">Aucun match trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default MatchesList;