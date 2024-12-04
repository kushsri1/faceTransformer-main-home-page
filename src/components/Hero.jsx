"use client"
import { useState } from 'react'

const Home = () => {
  const [currentImage, setCurrentImage] = useState("/img/imgggg 1.png");
  const [currentText, setCurrentText] = useState("/img/hero-section-2-strip-img/enhance.png");
  const [isSliding, setIsSliding] = useState(false);
  const handleBothImages = (restoreImageSrc, galleryImageSrc) => {
    handleText(restoreImageSrc);
    handleImageClick(galleryImageSrc);  
  };

  const handleText = (newText) => {
    if (newText !== currentText) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentText(newText);
        setIsSliding(false);
      }, 500);
    }
  };

  const handleImageClick = (newImage) => {
    if (newImage !== currentImage) {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentImage(newImage);
        setIsSliding(false);
      }, 500);
    }
  };

  return (
    <div className="flex flex-wrap bg-[#DED0C5] pb-6 relative md:pt-0 pt-16">
      <div className="hero-section-1 w-full md:w-[60%] mt-[100px] z-20 px-6 md:px-12">
        <img src="/img/BEYOND BEAUTY.png" alt="Beyond Beauty" className="mb-6" />
        <p className="text-[#796355] text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="img-section flex flex-wrap gap-5">
          <div onClick={() => handleBothImages("/img/hero-section-2-strip-img/enhance.png", "/img/hero-menu-img/GAL1.png")}>
            <img
              onClick={() => handleText("/img/hero-section-2-strip-img/enhance.png")}
              className="hidden"
              src="/img/hero-section-2-strip-img/enhance.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/hero-menu-img/GAL1.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/hero-menu-img/GAL1.png"
              alt="Gallery Image 1"
            />
          </div>

          <div className='image-1-text' onClick={() => handleBothImages("/img/hero-section-2-strip-img/restore.png", "/img/hero-menu-img/GAL2.png")}>
            <img
              onClick={() => handleText("/img/hero-section-2-strip-img/restore.png")}
              className="hidden"
              src="/img/hero-section-2-strip-img/restore.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/hero-menu-img/GAL2.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/hero-menu-img/GAL2.png"
              alt="Gallery Image 2"
            />
          </div>

          <div onClick={() => handleBothImages("/img/hero-section-2-strip-img/confidence.png", "/img/hero-menu-img/GAL3.png")}>
            <img
              onClick={() => handleText("/img/hero-section-2-strip-img/confidence.png")}
              className="hidden"
              src="/img/hero-section-2-strip-img/confidence.png"
              alt=""
            />
            <img
              onClick={() => handleImageClick("/img/hero-menu-img/GAL3.png")}
              className="w-[199px] hover:opacity-90 cursor-pointer"
              src="/img/hero-menu-img/GAL3.png"
              alt="Gallery Image 3"
            />
          </div>
        </div>
      </div>

      <div className="hero-section-2 w-full md:w-[40%] flex justify-center bg-[url('/img/imgggg 1.png')]">
        <div className="w-[50vw] h-[500px] md:h-[720px] relative bg-cover">
          <div
            className={`z-20 absolute top-0 left-0 object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <img className="h-[700px]" src={currentText} />
          </div>
          <div
            className={`absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 ${
              isSliding ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <img className="h-full w-full object-cover" src={currentImage} alt="Foreground Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
