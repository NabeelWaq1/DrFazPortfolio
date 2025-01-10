import React, { useRef } from 'react'
import VideoTestimonial from '../components/VideoTestimonial';

const Testimonials = () => {
    
  const formateTime = time => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);
    let hours = Math.floor((time / 3600));

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if(hours == 0){
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

   const videoRef1 = useRef(null);
   const videoRef2 = useRef(null);
   const videoRef3 = useRef(null);
   const videoRef4 = useRef(null);
   const videoRef5 = useRef(null);
   const videoRef6 = useRef(null);
   const videoRef7 = useRef(null);
   const videoRef8 = useRef(null);
   const videoRef9 = useRef(null);
   const videoRef10 = useRef(null);
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
      videoRef1.current.paused ? videoRef1.current.play() : videoRef1.current.pause();
      videoRef1.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill");
      playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
    }

  
    const timeUpdate = (e) => {
      const {currentTime , duration} = e.target;
      let percent = (currentTime/duration) * 100;
      progressBar.current.style.width = `${percent}%`;
      currentTimeRef.current.innerText = formateTime(currentTime);
    }
    const addTime = () => {
      videoRef1.current.currentTime += 5;
    }
    const subTime = () => {
      videoRef1.current.currentTime -= 5;
    }
  
    const muteUnmute = () => {
      if(!volumeRef.current.classList.contains("ri-volume-up-fill")){
         videoRef1.current.volume = 0.5;
         volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
      }else{
        videoRef1.current.volume = 0.0;
        volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
      }
    }
  
    const changeVolume = (e) => {
     videoRef1.current.volume = e.target.value;
     if(e.target.value == 0){
      volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
     }else{
      volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
     }
     volumeRef.current.value = videoRef1.current.volume;
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
         videoRef1.current.playbackRate = e.target.dataset.speed;
         speedOptions.current.querySelector(".active").classList.remove("active");
         e.target.classList.add("active");
    }
    const picInPic = () => {
      videoRef1.current.requestPictureInPicture();
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
     videoRef1.current.currentTime = (e.nativeEvent.offsetX / timeLineWidth) * videoRef1.current.duration;
    }
  
    const updateDuration = (e) => {
      durationref.current.innerText = formateTime(e.target.duration);
    }
    const updatingProgressTime = (e) => {
      progressTimeRef.current.style.left = `${e.nativeEvent.offsetX}px`
      let timeLineWidth = e.target.clientWidth;
      let percent = (e.nativeEvent.offsetX / timeLineWidth) * videoRef1.current.duration;
      progressTimeRef.current.innerText = formateTime(percent);
    }
  
    const hideControls = () => {
      // if(videoRef1.current.paused) return null;
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
      videoRef1.current.paused ? videoRef1.current.play() : videoRef1.current.pause();
      playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
      videoRef1.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill") 
    }
   
  
  //  const forVideo2 = (videoRef2) => {
  //   const playPauseVideo = () => {
  //     videoRef2.current.paused ? videoRef2.current.play() : videoRef2.current.pause();
  //     videoRef2.current.paused ? playPauseBtn.current.classList.replace("ri-pause-fill","ri-play-fill") : playPauseBtn.current.classList.replace("ri-play-fill","ri-pause-fill") 
  //   }
  
  //   const formateTime = time => {
  //     let seconds = Math.floor(time % 60);
  //     let minutes = Math.floor((time / 60) % 60);
  //     let hours = Math.floor((time / 3600));
  
  //     seconds = seconds < 10 ? `0${seconds}` : seconds;
  //     minutes = minutes < 10 ? `0${minutes}` : minutes;
  //     hours = hours < 10 ? `0${hours}` : hours;
  
  //     if(hours == 0){
  //       return `${minutes}:${seconds}`;
  //     }
  //     return `${hours}:${minutes}:${seconds}`;
  //   }
  
  //   const timeUpdate = (e) => {
  //     const {currentTime , duration} = e.target;
  //     let percent = (currentTime/duration) * 100;
  //     progressBar.current.style.width = `${percent}%`;
  //     currentTimeRef.current.innerText = formateTime(currentTime);
  //   }
  //   const addTime = () => {
  //     videoRef2.current.currentTime += 5;
  //   }
  //   const subTime = () => {
  //     videoRef2.current.currentTime -= 5;
  //   }
  
  //   const muteUnmute = () => {
  //     if(!volumeRef.current.classList.contains("ri-volume-up-fill")){
  //        videoRef2.current.volume = 0.5;
  //        volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
  //     }else{
  //       videoRef2.current.volume = 0.0;
  //       volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
  //     }
  //   }
  
  //   const changeVolume = (e) => {
  //    videoRef2.current.volume = e.target.value;
  //    if(e.target.value == 0){
  //     volumeRef.current.classList.replace("ri-volume-up-fill","ri-volume-mute-fill");
  //    }else{
  //     volumeRef.current.classList.replace("ri-volume-mute-fill","ri-volume-up-fill");
  //    }
  //    volumeRef.current.value = videoRef2.current.volume;
  //   }
  
  //   const showOptions = () => {
  //        speedOptions.current.classList.toggle("show");
  //   }
  //   const checkClick = (e) => {
  //     if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-outlined"){
  //       speedOptions.current.classList.remove("show");
  //     }
  //   }
  
  //   const videoSpeed = (e) => {
  //        videoRef2.current.playbackRate = e.target.dataset.speed;
  //        speedOptions.current.querySelector(".active").classList.remove("active");
  //        e.target.classList.add("active");
  //   }
  //   const picInPic = () => {
  //     videoRef2.current.requestPictureInPicture();
  //   }
  //   const fullScreen = () => {
  //      containerRef.current.classList.toggle("fullscreen");
  //      if(document.fullscreenElement){
  //       return document.exitFullscreen;
  //      }
  //      containerRef.current.requestFullscreen;
  //   }
  
  //   const updatingVideoTimeline = (e) => {
  //    let timeLineWidth = e.target.clientWidth;
  //    videoRef2.current.currentTime = (e.nativeEvent.offsetX / timeLineWidth) * videoRef2.current.duration;
  //   }
  
  //   const updateDuration = (e) => {
  //     durationref.current.innerText = formateTime(e.target.duration);
  //   }
  //   const updatingProgressTime = (e) => {
  //     progressTimeRef.current.style.left = `${e.nativeEvent.offsetX}px`
  //     let timeLineWidth = e.target.clientWidth;
  //     let percent = (e.nativeEvent.offsetX / timeLineWidth) * videoRef2.current.duration;
  //     progressTimeRef.current.innerText = formateTime(percent);
  //   }
  
  //   const hideControls = () => {
  //     // if(videoRef2.current.paused) return null;
  //     timer = setTimeout(() => {
  // containerRef.current.classList.remove("show-controls")
  //     },3000)
  //   }
  //   hideControls();
  
  //   const showControls = () => {
  //     containerRef.current.classList.add("show-controls");
  //     clearTimeout(timer);
  //     hideControls();
  //   }
  
  //   const playPause = () => {
  //     playPauseRef.current.classList.contains("ri-play-fill") ? videoRef2.current.play() : videoRef2.current.pause();
  //     playPauseRef.current.classList.contains("ri-play-fill") ? playPauseRef.current.classList.replace("ri-play-fill","ri-pause-fill") : playPauseRef.current.classList.replace("ri-pause-fill","ri-play-fill");
  //   }
  //  }
  //  forVideo2();
  return (
    <div className='w-full min-h-screen bg-background mt-[100px]'>
      {/* Section 1 */}
      <div className="w-full min-h-[130vh] bg-[url('/src/assets/testimonial1.png')] bg-cover bg-center md:min-h-[85vh] flex flex-col md:flex-row gap-10 md:gap-8 px-4 md:px-8 py-8 justify-center md:justify-between items-center pt-[80px]">
        {/* Left */}
        <div className="flex flex-col items-center justify-center md:items-start gap-2 w-full md:w-[50%]">
          <h4 className='flex justify-center items-center gap-4 text-primary text-lg font-light text-center md:text-start'>TESTIMONIALS <span className='w-10 h-[1px] bg-primary'></span></h4>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center md:text-start'>Uncover the reasons behind <span className='text-tritary'>Faz's worldwide popularity as a trusted partner.</span></h1>
          <button className='bg-thrice text-background sm:text-xl hover:bg-tritary hover:text-primary text-base px-2 py-1 sm:px-5 text-center rounded-xl font-extrabold border-2 border-background transition-all ease-in-out duration-500 mt-4 md:text-start'>View</button>
        </div>
        {/* Right */}
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <iframe className='w-full h-[400px] md:w-[80%] md:h-[300px] rounded-3xl' src="https://www.youtube.com/embed/lvLcAjbwi3U?si=QDWuiByIMt_2WY53" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      {/* Section 2 */}
      <div className="slider py-16 min-h-screen grid items-center m-auto relative w-[90%]">
        <div className="slide-track flex w-[cal(250px * 9)]">

          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>

        </div>
        <div reverse="true" className="slide-track flex w-[cal(250px * 9)]">

          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/2.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/3.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/4.png" alt="" />
          </div>
          <div className="slide h-[250px] w-[250px] flex items-center p-[15px]">
            <img className='w-full h-full object-cover' src="/src/assets/1.png" alt="" />
          </div>

        </div>
      </div>

{/* Section 3 */}
      <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-8 gap-4">
    
        <VideoTestimonial videoRef={videoRef1} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef2} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef3} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef4} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef5} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef6} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef7} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef8} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef9} videoSrc={"/src/assets/drFazVideo.mp4"} />
        <VideoTestimonial videoRef={videoRef10} videoSrc={"/src/assets/drFazVideo.mp4"} />
       
      </div>
    </div>
  )
}

export default Testimonials
