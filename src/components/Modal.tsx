import React from 'react';
import { ISong } from '../interfaces/songs';

interface ModalProps {
  onClose: () => void;
  song: ISong;
}

const Modal: React.FC<ModalProps> = ({ onClose, song }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{song.name}</h2>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Genre: {song.genre}</p>
      </div>
    </div>
  );
};

export default Modal;