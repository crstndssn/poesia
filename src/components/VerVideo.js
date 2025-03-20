import Image from "next/image";
import { useState } from "react";

export default function VerVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div 
        className="mb-36 border-2 border-black hover:bg-[#fffff3] flex justify-center items-center gap-2 rounded-full px-7 pb-2 pt-3 font-bold cursor-pointer text-center"
        onClick={() => setIsOpen(true)}
      >
        <Image
          className="w-7 mb-1 h-max"
          src="/icons/play.svg"
          alt="alt"
          width={10}
          height={10}/>
        <p className="text-lg font-bold">Reproducir video Charla TEDx</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-10 max-w-lg w-full relative">
            <button 
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-center mb-7">Charla TEDx</h2>
            <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/ykzC-S0hcrs?si=TPxFbYMgaxoh8jbS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}