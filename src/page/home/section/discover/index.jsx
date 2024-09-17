import DiscoverCard from "../../../../components/cards/discoverCard.jsx";

const Discover = ({ discoverData }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-2">
      <div className="text-left font-medium text-gray-800 text-xl mb-4">
        Discover
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {discoverData.map((item, index) => (
          <div
            key={index}
            className="opacity-0.5 animate-fadeInUp animation-delay"
            style={{ animationDelay: `${index * 1}s` }} // Staggered effect
          >
            <DiscoverCard
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
