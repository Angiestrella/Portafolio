import React, { useState } from 'react';
import LockerDoor from './LockerDoor';
import LockerInterior from './LockerInterior';
import BookModal from './BookModal';
import PolaroidModal from './PolaroidModal';
import ContactFlyerModal from './ContactFlyerModal';
import LaptopModal from './LaptopModal';
import PosterModal from './PosterModal';

export default function Locker() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleDoor = () => {
    setIsDoorOpen(prev => !prev);
  };

  const handleOpenItem = (itemKey) => {
    setActiveModal(itemKey);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="scene-3d">
      <div className="lockers-wrapper">
        
        {/* Left Side Decorative Locker */}
        <div className="side-locker left">
          <div className="vent-slit" style={{ margin: '20px auto', width: '70%' }}></div>
        </div>

        {/* Main Center Interactive Locker Unit */}
        <div className="main-locker-unit">
          
          {/* Locker Interior (Shelves, Books, Camera, Laptop, Flyer) */}
          <LockerInterior onOpenItem={handleOpenItem} />

          {/* 3D Locker Door */}
          <LockerDoor 
            isOpen={isDoorOpen} 
            onToggleDoor={toggleDoor} 
            onOpenPoster={() => handleOpenItem('poster')}
          />

        </div>

        {/* Right Side Decorative Locker */}
        <div className="side-locker right">
          <div className="vent-slit" style={{ margin: '20px auto', width: '70%' }}></div>
        </div>

      </div>

      {/* Interactive Centered Pop-Up Modals */}
      {activeModal === 'poster' && <PosterModal onClose={handleCloseModal} onOpenItem={handleOpenItem} />}
      {activeModal === 'books' && <BookModal onClose={handleCloseModal} />}
      {activeModal === 'camera' && <PolaroidModal onClose={handleCloseModal} />}
      {activeModal === 'flyer' && <ContactFlyerModal onClose={handleCloseModal} />}
      {activeModal === 'laptop' && <LaptopModal onClose={handleCloseModal} />}
    </div>
  );
}
