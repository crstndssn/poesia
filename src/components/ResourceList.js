
const ResourceList = ({ resources, onOpen }) => (
    <div className="mt-2 space-y-2">
      {resources.map((resource, index) => (
        <button
          key={index}
          className={`py-1 px-3 rounded ${resource.type === 'pdf' ? 'bg-blue-500' : 'bg-green-500'} text-white`}
          onClick={() => onOpen(resource.url)}
        >
          Ver {resource.type.toUpperCase()}
        </button>
      ))}
    </div>
  );
  
  export default ResourceList;
  