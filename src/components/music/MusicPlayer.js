import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const { musicId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState({});
  const getMusicDetails = async () => {
    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };
    try {
      setIsLoading(true);
      const musicData = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song/${musicId}`,
        config
      );
      console.log("musicData:", musicData);
      setMusic(musicData.data.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMusicDetails();
  }, []);

  const getDate = (FullDate) => {
    if(FullDate) {
      const date = new Date(FullDate).getDate();
      const month = new Date(FullDate).getMonth();
      const year = new Date(FullDate).getFullYear();
      return `${date}/${month+1}/${year}`;
    }
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className="music-player-container">
      <img src={music.thumbnail} alt={music.title} className="music-player-image"/>
      <h2 className="music-player-title">{music.title}</h2>
      <p className="music-player-artist">{ music.artist && music.artist.map((element) => element.name).join(" & ")}</p>
      <p className="music-player-date">Published On: {getDate(music.createdAt)}</p>
    </section>
  );
};

export default MusicPlayer;
