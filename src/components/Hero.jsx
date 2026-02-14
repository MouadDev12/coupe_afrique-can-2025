import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="hero-title">
            <span className="hero-subtitle">Classique Africain</span>
            MAROC VS SÉNÉGAL
          </h1>
          <p className="hero-description">
            Le choc des géants africains pour une place en quarts de finale
          </p>
        </div>

        <div className="match-showdown">
          <div className="team team-left">
            <div className="team-flag-large">
              <img src="/src/assets/images/flags/morocco.svg" alt="Drapeau Maroc" />
            </div>
            <h3 className="team-name">MAROC</h3>
            <p className="team-coach">Walid Regragui</p>
            <div className="team-ranking">#35 FIFA</div>
          </div>

          <div className="versus">
            <div className="vs-circle">VS</div>
            <div className="match-info">
              <div className="match-date">20 Janvier 2025</div>
              <div className="match-venue">Stade Moulay Abdellah</div>
              <div className="match-time">20:00</div>
            </div>
          </div>

          <div className="team team-right">
            <div className="team-flag-large">
              <img src="/src/assets/images/flags/senegal.svg" alt="Drapeau Sénégal" />
            </div>
            <h3 className="team-name">SÉNÉGAL</h3>
            <p className="team-coach">Aliou Cissé</p>
            <div className="team-ranking">#18 FIFA</div>
          </div>
        </div>

        <div className="countdown">
          <h3>Le match commence dans</h3>
          <div className="countdown-timer">
            <div className="time-block">
              <span className="time-value">{countdown.days}</span>
              <span className="time-label">Jours</span>
            </div>
            <div className="time-block">
              <span className="time-value">{countdown.hours}</span>
              <span className="time-label">Heures</span>
            </div>
            <div className="time-block">
              <span className="time-value">{countdown.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-block">
              <span className="time-value">{countdown.seconds}</span>
              <span className="time-label">Secondes</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary">Réserver mes billets</button>
          <button className="btn-secondary">Voir les stats</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
