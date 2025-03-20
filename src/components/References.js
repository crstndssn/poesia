const Referencias = ({ referencias }) => {
    return (
      <div className="border-t border-black mt-7 py-4 mb-3">
        {referencias.map((referencia, index) => (
          <div key={index} className="flex">
            <span className="text-xs mr-2">{index + 1}</span>
            <p className="text-lg">{referencia}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Referencias;
  