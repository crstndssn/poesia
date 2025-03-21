import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="absolute md:pb-8 lg:pb-10 2xl:pb-20 bottom-20 md:bottom-4 w-full hidden md:flex justify-start items-end flex-col-reverse md:flex-row">
      
      <div className="flex w-1/5 md:flex-col md:gap-7 justify-around items-start ml-14 mb-3">
        <Image
          className="w-36 h-max"
          src="/BNC_Color.png"
          alt="alt"
          width={184}
          height={90}
        />
        <Image
          className="w-36 h-max"
          src="/RNBP_Color.png"
          alt="alt"
          width={184}
          height={90}
        />
      </div>

      <div className="flex w-3/5 flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-3 mb-0">
          <a
            href="https://wa.me/573204996083?text=Hola!%20vengo%20de%20tu%20p%C3%A1gina%20web!%20:)" target="_blank"
            className="w-full flex justify-center items-center gap-2  hover:bg-[#fffff3] border-2 border-black font-semibold px-5 pb-1 pt-2 rounded-full"
          >
            <Image
            className="w-7 mb-1 h-max"
            src="/icons/whatsapp.svg"
            alt="alt"
            width={10}
            height={10}
            />
            WhatsApp
          </a>
          <a href="https://www.instagram.com/amparopoesia/" target="_blank" className="w-full flex justify-center items-center gap-2  hover:bg-[#fffff3] border-2 border-black font-semibold px-5 pb-1 pt-2 rounded-full">
          <Image
            className="w-7 mb-1 h-max"
            src="/icons/instagram.svg"
            alt="alt"
            width={10}
            height={10}
            />
            Instagram</a>
          <a href="https://www.youtube.com/channel/UCDM3wX_D7xBLu_7sXGbE-0w" target="_blank" className="w-full flex justify-center items-center gap-2  hover:bg-[#fffff3] border-2 border-black font-semibold px-5 pb-1 pt-2 rounded-full">
          <Image
            className="w-7 mb-1 h-max"
            src="/icons/youtube.svg"
            alt="alt"
            width={10}
            height={10}
            />Youtube</a>
          <a href="" target="_blank" className="w-full flex justify-center items-center gap-2  hover:bg-[#fffff3] border-2 border-black font-semibold px-5 pb-1 pt-2 rounded-full">
          <Image
            className="w-7 mb-1 h-max"
            src="/icons/tiktok.svg"
            alt="alt"
            width={10}
            height={10}
            />Tik Tok</a>
        </div>

        <div className="mb-2 pt-2">
          <p className="text-xs">
            Érase una vez la poesía ©️ 2024 is licensed under CC BY-NC-SA 4.0  
          </p>
        </div>
      </div>


      <div className="flex w-1/5 md:flex-col md:gap-7 justify-around items-start ml-12 mb-3">
      
      </div>

    </div>
  );
};

export default Footer;
