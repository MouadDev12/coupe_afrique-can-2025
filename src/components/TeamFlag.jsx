import { useState } from 'react';

const TeamFlag = ({ src, alt, className, teamName }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.log(`Erreur de chargement pour: ${src}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Fallback avec initiales du pays (seulement si l'image ne charge pas)
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Afficher l'image si elle existe et se charge correctement
  if (!imageError && src) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{
          objectFit: 'cover',
          borderRadius: '5px',
          border: '2px solid #ddd',
          backgroundColor: imageLoaded ? 'transparent' : '#f0f0f0'
        }}
      />
    );
  }

  // Fallback seulement si l'image ne charge pas
  return (
    <div 
      className={`${className} flag-fallback`}
      style={{
        backgroundColor: '#4a7c59',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: className.includes('large') ? '1.5rem' : '0.8rem',
        border: '2px solid #2c5530',
        borderRadius: '5px'
      }}
    >
      {getInitials(teamName)}
    </div>
  );
};

export default TeamFlag;