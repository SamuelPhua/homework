import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ trailer, playing, setPlaying }) => {
  return (
    <>
      {playing && (
        <YouTube
          videoId={trailer.key}
          opts={{
            width: "1280",
            height: "600",
            playerVars: {
              autoplay: 1,
              controls: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      )}
      {playing && (
        <button
          onClick={() => setPlaying(false)}
          className={"button close-video"}
        >
          Close
        </button>
      )}
    </>
  );
};

export default VideoPlayer;
