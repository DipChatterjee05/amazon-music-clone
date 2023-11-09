import React from "react";
import "./MusicCard.css";

const MusicCard = ({ details }) => {
  const { thumbnail, title, artist } = details;
  const artistNames = artist.map((ast) => ast.name);
  return (
    <section className="music-card-container">
      <img src={thumbnail} alt={title} className="music-card-image" />
      <p className="music-card-title">{title}</p>
      <p className="music-card-artist">{artistNames.join(" & ")}</p>
    </section>
  );
};

export default MusicCard;