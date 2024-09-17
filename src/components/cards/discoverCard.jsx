import { Arrow2 } from "../../assets/icons/arrow2";

const DiscoverCard = ({ imgSrc, title, description }) => {
  return (
    <div
      className="relative w-full h-[300px] lg:h-[350px] bg-gray-300 rounded-md border border-gray-300 overflow-hidden 
      transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img
        className="w-full h-[50%] object-cover rounded-t-md transition-all duration-500 transform hover:scale-110 hover:brightness-75"
        alt={title}
        src={imgSrc}
      />

      <div className="w-full h-[50%] bg-white rounded-b-md p-4 relative z-10">
        <div className="text-lg font-medium text-gray-700 mb-2">{title}</div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="absolute bottom-[15px] right-[10px] transform transition-transform duration-300 hover:rotate-90">
          <Arrow2 className="w-5 h-5" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-10 transition-opacity duration-500"></div>
    </div>
  );
};

export default DiscoverCard;
