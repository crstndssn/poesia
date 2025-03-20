import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://wa.me/tu-numero" // Reemplaza 'tu-numero' con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit px-10 border-2 border-black border-solid py-2 rounded-full flex gap-4 justify-center items-center hover:bg-gray-100 text-bold transition"
      >
        <Image
          className="w-8 h-max"
          src="/icons/whatsapp.svg"
          alt="WhatsApp Icon"
          width={36}
          height={36}
        />
        Préguntame
      </a>
    </div>
  );
};

export default WhatsAppButton;
