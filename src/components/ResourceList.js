import Image from 'next/image';

const icons = {
  pdf: '/icons/repo.svg', // Ícono para PDF
  image: '/icons/imagenes.svg', // Ícono para imágenes
  video: '/icons/video.svg', // Ícono para videos
  audio: '/icons/audio.svg', // Ícono para audio
};

const ResourceList = ({ resources, onOpen }) => (
  <div className="gap-2 flex flex-wrap mt-5">
    {resources.map((resource, index) => (
      <button
        key={index}
        className={`mt-0 py-3 px-3 rounded-full flex justify-center items-center gap-5 border border-black ${
          resource.type === 'pdf' ? 'bg-[#FFFFF3]' : 'bg-[#FFFFF3]'
        } text-white`}
        onClick={() => onOpen(resource.url)}
      >
        {icons[resource.type] && (
          <Image
            src={icons[resource.type]}
            alt={resource.type}
            width={20}
            height={20}
          />
        )}
        <span className='text-black'>Ver {resource.type.toUpperCase()}</span>
      </button>
    ))}
  </div>
);

export default ResourceList;
