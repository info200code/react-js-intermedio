import React from "react";
import { Menu } from "../../components";
import PlayList from "../PlayLists";
import { StoreProvider } from "../../utilities/hooks/use-store";
import { getToken } from "../../utilities/session";
import Browse from "../Browse";
import "./styles.css";
import TrackTitle from "../../components/TrackTitle";
import CurrentTrack from "../CurrentTrack";
import { TrackProvider } from "../../utilities/hooks/use-track";

const Home = () => {
  const session = getToken();

  return (
    <TrackProvider>
      <StoreProvider session={session}>
        <div className="container">
          <div className="browse-wrapper">
            <div className="playlist-wrapper">
              <Menu title="main">
                <Menu.Item to="/">Browse</Menu.Item>
              </Menu>
              <PlayList />
            </div>
            <div className="body-wrapper">
              <Browse />
            </div>
          </div>
          <div className="player-wrapper">
            <TrackTitle />
            <CurrentTrack />
          </div>
        </div>
      </StoreProvider>
    </TrackProvider>
  );
};

export default Home;
