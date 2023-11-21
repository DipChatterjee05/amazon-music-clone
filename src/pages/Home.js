import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../components/music/MusicCard";

function Home() {
  const [musicList, setMusicList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMusicList = async () => {
    const config = {
      headers: {
        projectId: "zyn0umnsp0rz",
      },
    };
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        config
      );
      setMusicList(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMusicList();
  }, []);
  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section  className="music-list-container">
          {musicList.length > 0 &&
            musicList.map((music) => {
              return <MusicCard details={music} />;
            })}
        </section>
      )}
    </main>
  );
}

export default Home;
