import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FaPlay, FaPause, FaFastForward, FaFastBackward, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';

const VideoPlayer = ({ url }) => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [muted, setMuted] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [played, setPlayed] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1);

    const handlePlayPause = () => setPlaying(prevPlaying => !prevPlaying);
    const handleMute = () => setMuted(prevMuted => !prevMuted);
    const handleVolumeChange = e => setVolume(parseFloat(e.target.value));
    const handleProgress = state => {
        setPlayed(state.played);
        setLoaded(state.loaded);
    };
    const handleDuration = duration => setDuration(duration);
    const handleRewind = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    const handleFastForward = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    const handlePlaybackRateChange = e => setPlaybackRate(parseFloat(e.target.value));

    return (
        <div className="video-player">
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={playing}
                muted={muted}
                volume={volume}
                playbackRate={playbackRate}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
            <div className="controls">
                <button onClick={handlePlayPause}>
                {playing ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={handleRewind}><FaFastBackward /></button>
                <button onClick={handleFastForward}><FaFastForward /></button>
                <div className="volume">
                <button onClick={handleMute}>
                    {muted ? <FaVolumeUp /> : <FaVolumeDown />}
                </button>
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={volume} 
                    onChange={handleVolumeChange} 
                />
                </div>
                <div className="playback-rate">
                <span>Speed:</span>
                <input 
                    type="range" 
                    min="0.5" 
                    max="2" 
                    step="0.1" 
                    value={playbackRate} 
                    onChange={handlePlaybackRateChange} 
                />
                </div>
            </div>
        </div>
  );
};

export default VideoPlayer;