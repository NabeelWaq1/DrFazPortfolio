import React, { useRef } from 'react'

const VideoTestimonial = ({videoRef,videoSrc,thumb}) => {

     const playPauseBtn = useRef(null);
        const progressBar = useRef(null);
        const volumeRef = useRef(null);
        const rangeRef = useRef(null);
        const speedOptions = useRef(null);
        const containerRef = useRef(null);
        const videoTimeLine = useRef(null);
        const currentTimeRef = useRef(null);
        const durationref = useRef(null);
        const progressTimeRef = useRef(null);
        const playPauseRef = useRef(null);
        let timer;
      
      
      
        const playPauseVideo = () => {
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
          videoRef.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill");
          playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
        }
    
      
        const timeUpdate = (e) => {
          const {currentTime , duration} = e.target;
          let percent = (currentTime/duration) * 100;
          progressBar.current.style.width = `${percent}%`;
          currentTimeRef.current.innerText = formateTime(currentTime);
        }
        const addTime = () => {
          videoRef.current.currentTime += 5;
        }
        const subTime = () => {
          videoRef.current.currentTime -= 5;
        }
      
        const muteUnmute = () => {
          if(!volumeRef.current.classList.contains("ri-volume-up-fill")){
             videoRef.current.volume = 0.5;
             volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
          }else{
            videoRef.current.volume = 0.0;
            volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
          }
        }
      
        const changeVolume = (e) => {
         videoRef.current.volume = e.target.value;
         if(e.target.value == 0){
          volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
         }else{
          volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
         }
         volumeRef.current.value = videoRef.current.volume;
        }
      
        const showOptions = () => {
             speedOptions.current.classList.toggle("show");
        }
        const checkClick = (e) => {
          if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-outlined"){
            speedOptions.current.classList.remove("show");
          }
        }
      
        const videoSpeed = (e) => {
             videoRef.current.playbackRate = e.target.dataset.speed;
             speedOptions.current.querySelector(".active").classList.remove("active");
             e.target.classList.add("active");
        }
        const picInPic = () => {
          videoRef.current.requestPictureInPicture();
        }
        const fullScreen = () => {
           containerRef.current.classList.toggle("fullscreen");
           if(document.fullscreenElement){
            return document.exitFullscreen;
           }
           containerRef.current.requestFullscreen;
        }
      
        const updatingVideoTimeline = (e) => {
         let timeLineWidth = e.target.clientWidth;
         videoRef.current.currentTime = (e.nativeEvent.offsetX / timeLineWidth) * videoRef.current.duration;
        }
      
        const updateDuration = (e) => {
          durationref.current.innerText = formateTime(e.target.duration);
        }
        const updatingProgressTime = (e) => {
          progressTimeRef.current.style.left = `${e.nativeEvent.offsetX}px`
          let timeLineWidth = e.target.clientWidth;
          let percent = (e.nativeEvent.offsetX / timeLineWidth) * videoRef.current.duration;
          progressTimeRef.current.innerText = formateTime(percent);
        }
      
        const hideControls = () => {
          // if(videoRef.current.paused) return null;
          timer = setTimeout(() => {
      containerRef.current.classList.remove("show-controls")
          },3000)
        }
        hideControls();
      
        const showControls = () => {
          containerRef.current.classList.add("show-controls");
          clearTimeout(timer);
          hideControls();
        }
      
        const playPause = () => {
          videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
          playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
          videoRef.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill") 
        }
       

  return (
    <div className="w-full md:w-[80%] relative flex flex-col gap-2 items-center md:items-start justify-center mx-auto mb-10">
    <div onMouseMove={() => showControls()} ref={containerRef} className="container w-full md:w-full  relative rounded-lg bg-black mx-auto">
    <div onClick={playPause} className="absolute flex justify-center items-center w-20 z-10 cursor-pointer opacity-0 h-20 play rounded-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-tritary text-white">
    <i ref={playPauseRef} className="ri-play-fill text-3xl text-center cursor-pointer"></i>
    </div>
    <div className="wrapper absolute left-0 right-0 bottom-0">
      <div onMouseMove={(e) => updatingProgressTime(e)} className="video-timeline" onClick={(e) => updatingVideoTimeline(e)} ref={videoTimeLine}>
        <div  className="progress-area">
          <span ref={progressTimeRef}>00:00</span>
          <div ref={progressBar} className="progress-bar"></div>
        </div>
      </div>
      <ul className="video-controls">
        <li className='options left'>
          <button onClick={muteUnmute} className="volume"><i ref={volumeRef} className="ri-volume-up-fill"></i></button>
          <input onChange={ (e) => changeVolume(e)} ref={rangeRef} type="range" min={"0"} max={"1"} step={"any"} />
          <div className="video-timer">
            <p ref={currentTimeRef} className="current-time">00:00</p>
            <p className="separator">/</p>
            <p ref={durationref} className="video-duration">00:00</p>
          </div>
        </li>
        <li className='options center'>
        <button onClick={subTime} className="skip-backward hidden md:block"><i className="ri-skip-back-mini-fill"></i></button>
        <button onClick={playPauseVideo} className="play-pause"><i ref={playPauseBtn} className="ri-play-fill"></i></button>
        <button onClick={addTime} className="skip-forward hidden md:block"><i className="ri-skip-forward-mini-fill"></i></button>
        </li>
      
        <li className='options right'>
          <div className="playback-content">
          <button onClick={showOptions} className="playback-speed hidden md:block">
          <span className="material-symbols-outlined">
            slow_motion_video
          </span>
          </button>
          <ul ref={speedOptions} className="speed-options">
           <li onClick={(e) => videoSpeed(e)} data-speed="2">2x</li>
           <li onClick={(e) => videoSpeed(e)} data-speed="1.5">1.5x</li>
           <li onClick={(e) => videoSpeed(e)} data-speed="1" className='active'>Normal</li>
           <li onClick={(e) => videoSpeed(e)} data-speed="0.75">0.75X</li>
           <li onClick={(e) => videoSpeed(e)} data-speed="0.5">0.5X</li>
          </ul>
          </div>
          <button onClick={picInPic} className="pic-in-pic hidden md:block">
            <span className="material-symbols-outlined">
              picture_in_picture_alt
            </span>
          </button>
          <button onClick={fullScreen} className="fullscreen">
            <i className="ri-fullscreen-fill"></i>
            </button>
        </li>
      </ul>
    </div>
    <video onLoadedData={(e) => updateDuration(e)} onTimeUpdate={(e) => timeUpdate(e)} ref={videoRef} poster={thumb} className='w-full h-full px-2 rounded-lg' src={videoSrc}></video>
  </div>
  <h4 className='text-xl md:text-2xl text-center md:text-start text-primary font-extrabold'>John C Maxwell</h4>
  <h4 className='text-lg md:text-xl text-center md:text-start text-black [text-shadow:_0px_1px_2px_#2f6690] font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, repellat.</h4>
  </div>
  )
}

export default VideoTestimonial