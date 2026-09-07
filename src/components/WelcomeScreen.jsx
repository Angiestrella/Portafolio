import React from 'react';
import { Play } from 'lucide-react';
import { soundManager } from '../utils/audio';
import portfolioImage from '../../portafolio.jpg';

export default function WelcomeScreen({ onStart }) {
  const handleStartClick = () => {
    soundManager.playPop();
    soundManager.startCalmAmbientMusic();
    onStart();
  };

  return (
    <div
      className="welcome-screen-overlay"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.15), rgba(15,23,42,0.65)), url(${portfolioImage})`
      }}
    >
      <div className="welcome-cover-card">
        <button className="start-experience-btn" onClick={handleStartClick}>
          <Play size={18} fill="#ffffff" /> <span>Entrar</span>
        </button>
      </div>
    </div>
  );
}
