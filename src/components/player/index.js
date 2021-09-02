import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  startTrack,
  increaseTrackIndex,
  songCurrentTime,
  songDuration,
} from "../../actions";
import PlayerLeft from "./player-left";
import PlayerRight from "./player-right";
import PlayerControl from "./player-control/player-control";
import ProgressBar from "./player-control/progress-bar";
import getRightList from "../../functions/getList";
import styles from "./index.module.css";
import Video from "./video";
import useLocation from "../../hooks/useLocation";
import useWindowSize from "../../hooks/useWindowSize";

function Player(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [VidCurrentTime, setVidCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [VidDuration, setVidDuration] = useState(0);
  const vol = parseFloat(localStorage.getItem("Volume"), 10);
  const [volume, setVolume] = useState(vol ? vol : 1);

  const audioRef = useRef(null);
  const videoRef = useRef(null);

  const location = useLocation();
  const size = useWindowSize();

  const showVideo = (props.trackData.isChartsPlaying || location === "/Charts") && size.width > 770;
  const isAudioPlaying = props.trackData.songSrc && audioRef.current && (!props.trackData.isChartsPlaying || (location === "/Charts" && size.width < 770));
  const isVideoPlaying = props.trackData.songSrc && videoRef.current && props.trackData.isChartsPlaying;

  useEffect(() => {
    if (isAudioPlaying) props.songCurrentTime(currentTime);
    else props.songCurrentTime(VidCurrentTime);
  }, [currentTime, VidCurrentTime]);

  useEffect(() => {
    if (isAudioPlaying) {
      if (localStorage.getItem("Volume")) {
        audioRef.current.volume = parseFloat(
          localStorage.getItem("Volume"),
          10
        );
      } else {
        audioRef.current.volume = volume;
      }
    }
    if (isVideoPlaying) {
      if (localStorage.getItem("Volume")) {
        videoRef.current.volume = parseFloat(
          localStorage.getItem("Volume"),
          10
        );
      } else {
        videoRef.current.volume = volume;
      }
    }
  }, [props.trackData, volume]);

  useEffect(() => {
    if (isAudioPlaying) {
      if (props.isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {}).catch((error) => console.log(error));
        }
      } else {
        audioRef.current.pause();
      }
    }

    if (isVideoPlaying) {
      if (props.isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {}).catch((error) => console.log(error));
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [audioRef, videoRef, props.isPlaying, props.trackData.isChartsPlaying]);

  useEffect(() => {
    let LIST = getRightList(props.trackData.listName);
    let audioOrVideo = isAudioPlaying ? audioRef : videoRef;

    if (audioOrVideo.current) {
      audioOrVideo.current.addEventListener("ended", () => {
        if (props.trackData.songIndex === LIST.length - 1) {
          props.startTrack({
            listName: props.trackData.listName,
            songIndex: 0,
            songName: LIST[0].title,
            songArtist: LIST[0].subtitle,
            songSrc: LIST[0].src,
            coverSrc: LIST[0].images.coverart,
            videoSrc: LIST[0].videoSrc ? LIST[0].videoSrc : "",
          });
        } else {
          props.increaseTrackIndex({
            listName: props.trackData.listName,
            songIndex: props.trackData.songIndex,
          });
        }
      });
    }
  }, [props.trackData, videoRef, audioRef]);

  const handleTrackClick = (position) => {
    if (isAudioPlaying) audioRef.current.currentTime = position;
    else videoRef.current.currentTime = position;
  };

  let height = {};
  if (location === "/Charts" && size.width > 770)
    height = { height: `${props.videoHeight}px` };

  return (
    <>
      {showVideo ? (
        <div style={height}>
          <div
            className={styles.playerContainer}
            style={location !== "/Charts" ? { display: "none" } : {}}
          >
            <Video
              ref={videoRef}
              handleDuration={setVidDuration}
              handleCurrentTime={setVidCurrentTime}
              songDuration={(e) => props.songDuration(e)}
              trackData={props.trackData}
              isPlaying={props.isPlaying}
              showPlayer={props.showPlayer}
            ></Video>
          </div>
        </div>
      ) : null}

      {!props.trackData.isChartsPlaying ||
      (location === "/Charts" && size.width < 770) ? (
        <audio
          ref={audioRef}
          onLoadedMetadata={(e) => {
            setDuration(e.target.duration);
            props.songDuration(e.target.duration);
          }}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          src={props.trackData.songSrc}
          autoPlay={props.isPlaying}
        />
      ) : null}

      {props.showPlayer ? (
        <div className={styles.player}>
          <div className={styles.bar}>
            <PlayerLeft className={styles.playerLeft} />
            <div className={styles.playerMid}>
              <ProgressBar
                currentTime={isAudioPlaying ? currentTime : VidCurrentTime}
                duration={isAudioPlaying ? duration : VidDuration}
                handleTrackClick={handleTrackClick}
              />
            </div>
            <div className={styles.right}>
              <PlayerControl />
              <PlayerRight volume={volume} setVolume={setVolume} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
    isPlaying: state.isPlaying,
    showPlayer: state.showPlayer,
    videoHeight: state.videoHeight,
  };
};

export default connect(mapStateToProps, {
  startTrack,
  increaseTrackIndex,
  songCurrentTime,
  songDuration,
})(Player);
