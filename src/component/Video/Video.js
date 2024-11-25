import ReactPlayer from 'react-player';


const Video = ({url,width,height}) => {
  return (
    <div className="video-player">
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls
      />
    </div>
  );
};

export default Video;