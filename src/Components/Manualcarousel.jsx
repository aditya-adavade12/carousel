import React, { useState } from "react";

const Manualcarousel = () => {
  // Array of images link
  const imgArray = [
    "https://hippy.in/wp-content/uploads/2015/02/bollywood-movie-themed-wedding-1.jpg",
    "https://wallpaperaccess.com/full/7420347.jpg",
    "https://media.licdn.com/dms/image/v2/C5612AQEreizk8qBU2w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1651553098104?e=2147483647&v=beta&t=HDEytWRXX8J-hbEbdtlvZ1jGjYIaNUXhi0Zhu3F6ZNk",
    "https://www.whoa.in/download/hate-story-3-first-look-bollywood-movies-poster",
  ];
  // Tracing the index
  const [Index, setIndex] = useState(0);
  // Next Image
  const nextImg = () => {
    setIndex((prev) => (prev + 1) % imgArray.length);
  };
  // Previous Image
  const prevImg = () => {
    setIndex((prev) => (prev - 1 + imgArray.length) % imgArray.length);
  };
  return (
    <div>
      {/* Main Wrapper */}
      <div className="w-[50vw] mx-auto mt-2.5">
        <h2 className="text-white font-semibold text-xl">Manual Carousel</h2>
        <p className="text-stone-500 font-medium">
          Controlled with prev and next buttons.
        </p>
        {/* Images */}
        <div className="relative w-full h-[400px] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 mt-1.5"
            style={{ transform: `translateX(-${Index * 100}%)` }}
          >
            {imgArray.map((img, index) => (
              <img
                key={index}
                src={img}
                className="w-full h-[500px] object-cover flex-shrink-0 rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-full mt-1.5 flex flex-row gap-2.5 justify-center items-center">
          <button
            onClick={prevImg}
            className="bg-stone-800 text-white w-full rounded-lg py-1.5 font-medium hover:opacity-90 cursor-pointer transition"
          >
            Prev
          </button>
          <button
            onClick={nextImg}
            className="bg-stone-800 text-white w-full rounded-lg py-1.5 font-medium hover:opacity-90 cursor-pointer transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manualcarousel;
