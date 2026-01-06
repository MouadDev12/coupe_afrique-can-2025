import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite, clearFavorites } from '../../store/index';
import TeamFlag from '../../components/TeamFlag.jsx';
import teamsData from '../../data/teams.json';
import './Favorites.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoriteTeams } = useSelector(state => state.favorites);

  const favoriteTeamsList = teamsData.filter(team => 
    favoriteTeams.includes(team.id)
  );

  const handleRemoveFavorite = (teamId) => {
    dispatch(toggleFavorite(teamId));
  };

  const handleClearAll = () => {
    dispatch(clearFavorites());
  };

  return (
    <div className="favorites">
      <div className="favorites-header">
        <h1>Mes Équipes Favorites</h1>
        {favoriteTeamsList.length > 0 && (
          <button onClick={handleClearAll} className="clear-all-btn">
            Supprimer tous les favoris
          </button>
        )}
      </div>

      {favoriteTeamsList.length > 0 ? (
        <div className="favorites-grid">
          {favoriteTeamsList.map(team => (
            <div key={team.id} className="favorite-card">
              <div className="favorite-header">
                <TeamFlag 
                  src={team.flagUrl} 
                  alt={`Drapeau ${team.name}`} 
                  className="team-flag"
                  teamName={team.name}
                />
                <h3>{team.name}</h3>
                <button
                  onClick={() => handleRemoveFavorite(team.id)}
                  className="remove-favorite-btn"
                  title="Retirer des favoris"
                >
                  ❌
                </button>
              </div>
              <div className="favorite-info">
                <p><strong>Coach:</strong> {team.coach}</p>
                <p><strong>Classement FIFA:</strong> {team.ranking}</p>
              </div>
              <Link to={`/teams/${team.id}`} className="favorite-details-btn">
                Voir détails
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-favorites">
          <h2>Aucune équipe favorite</h2>
          <p>Vous n'avez pas encore ajouté d'équipes à vos favoris.</p>
          <Link to="/teams" className="browse-teams-btn">
            Parcourir les équipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favorites;