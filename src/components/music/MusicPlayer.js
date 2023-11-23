import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
  const { musicId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState({});
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currTime, setCurrTime] = useState(0);

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
    if (FullDate) {
      const date = new Date(FullDate).getDate();
      const month = new Date(FullDate).getMonth();
      const year = new Date(FullDate).getFullYear();
      return `${date}/${month + 1}/${year}`;
    }
  };

  const playOrPause = () => {
    console.log("audioRef.current", audioRef.current);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
    // setDuration(audioRef.current.duration);
  };

  useEffect(() => {
    if (audioRef.current) {
      console.log("audioRef.current.duration", audioRef.current.duration);
    }
  }, [audioRef]);

  const formatTime = (time) => {
    const totalTime = Math.ceil(time);
    console.log("totalTime", totalTime);
    const min = Math.floor(totalTime / 60);
    const sec = totalTime % 60;
    const formatTimeNo = (no) => {
      return no < 10 ? `0${no}` : no;
    };
    return `${formatTimeNo(min)}:${formatTimeNo(sec)}`;
  };

  const updateTime = (e) => {
    setCurrTime(e.target.currentTime);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <section className="music-player-container">
      <img
        src={music.thumbnail}
        alt={music.title}
        className="music-player-image"
      />
      <h2 className="music-player-title">{music.title}</h2>
      <p className="music-player-artist">
        {music.artist &&
          music.artist.map((element) => element.name).join(" & ")}
      </p>
      <p className="music-player-date">
        Published On: {getDate(music.createdAt)}
      </p>
      <audio
        src={music.audio_url}
        ref={audioRef}
        onDurationChange={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={updateTime}
      />

      <section className="music-player-controls">
        <img
          src={music.thumbnail}
          alt={music.title}
          className="music-controls-image"
        />
        <section>
          <h4 className="music-controls-title">{music.title}</h4>
          <p className="music-controls-artist">
            {music.artist &&
              music.artist.map((element) => element.name).join(" & ")}
          </p>
        </section>

        <button onClick={playOrPause} className="play-and-pause-button">
          {isPlaying ? (
            <aside className="pause-button">
              <FontAwesomeIcon icon={faPause} size="2xl" />
            </aside>
          ) : (
            <aside className="play-button">
              <FontAwesomeIcon icon={faPlay} size="2xl" />
            </aside>
          )}
        </button>

        <div>00:00 / {formatTime(duration)}</div>
        <input type="range" value={currTime} min={0} max={duration} />
        <button className="library-button">
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </button>
      </section>
    </section>
  );
};

export default MusicPlayer;
