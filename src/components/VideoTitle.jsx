const VideoTitle = ({ orTitle }) => {
  return (
    //  bg-gradient-to-r from-gray-900 to-transparent 
    <div className="absolute flex flex-col left-0 top-0 h-[75%] w-screen aspect-video z-50 bg-gradient-to-r from-black to-transparent ">
      <div className="mt-70 w-[40%] left-0">
        <h1 className="font-semibold text-5xl text-white m-2">{orTitle}</h1>

        <div className="flex flex-row ml-30 mt-10">
          <button className="border-0 bg-white m-3 p-1 rounded-md w-[30%] h-10">
            ▶️ Play
          </button>
          <button className="border-0 bg-gray-500 m-3 p-1 rounded-md  w-[30%]  h-10 opacity-70">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
