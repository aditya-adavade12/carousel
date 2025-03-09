import React, { useEffect, useState } from "react";

const Autocarousel = () => {
  // Array of images link
  const imgArray = [
    "https://i.pinimg.com/736x/9e/d2/1e/9ed21e7a6a45e9999086f4fa0514c1ec.jpg",
    "https://c4.wallpaperflare.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
    "https://w0.peakpx.com/wallpaper/108/164/HD-wallpaper-game-best-game-2013-for-your-mobile-tablet-explore-best-gaming-best-gaming-best-gaming-best-gaming-good-gaming.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/06/Best-Video-Game-Wallpapers-HD.jpg",
  ];
  // Tracing the index
  const [Index, setIndex] = useState(0);
  // Updating the images
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-[50vw] mx-auto overflow-hidden relative h-[300px] mt-2.5">
        <h2 className="text-white font-semibold text-xl">Auto Carousel</h2>
        <p className="text-stone-500 font-medium">
          Changes within 2 seconds.
        </p>
        {/* Changing the images */}
        <div
          className="flex transition-transform duration-500 mt-1.5"
          style={{ transform: `translateX(-${Index * 100}%)` }}
        >
          {imgArray.map((img, i) => (
            <img
              src={img}
              key={i}
              className="w-full h-[300px] object-cover flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Autocarousel;
