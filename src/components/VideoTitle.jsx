const VideoTitle =({orTitle, overview}) => {

    return <div className="absolute flex flex-col mt-60 w-[40%] z-100">
        <h1 className="font-semibold text-5xl m-2">{orTitle}</h1>
        <p className="m-2 p-2">{overview}</p>
        <div className="flex flex-row">
        <button className="border-0 bg-white m-4 p-2 rounded-md w-[40%]">▶️ Play</button>
          <button  className="border-0 bg-gray-400 m-4 p-2 rounded-md  w-[40%]">ℹ️ More Info</button>
          </div>
    </div>

}

export default VideoTitle