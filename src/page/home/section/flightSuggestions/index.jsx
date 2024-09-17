import FlightCard from "../../../../components/cards/flightCard.jsx";
import { motion } from "framer-motion";

const FlightSuggestions = ({ suggestions, color, title, sub, more }) => {
  return (
    <motion.div
      className="max-w-6xl mx-auto space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-left mb-2">
        <p className="[font-family:'Montserrat-Medium',Helvetica] text-gray-1 font-normal text-base">
          <span className="font-medium text-[#4d4d4d]">
            {title || "Traveling from your location"}
          </span>
        </p>

        <div className="flex justify-between items-center">
          <p className="[font-family:'Montserrat-Medium',Helvetica] text-gray-1 font-normal text-base">
            <span className="text-[#4d4d4d] text-sm [font-family:'Montserrat-Light',Helvetica] font-light">
              {sub || "round trip - one passenger"}
            </span>
          </p>

          <motion.a
            href="#"
            className="text-right text-blue-600 relative"
            whileHover={{ color: "#1a73e8" }}
          >
            {more || " "}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {suggestions.map((flight, index) => (
          <FlightCard
            key={index}
            imgSrc={flight.imgSrc}
            city={flight.city}
            price={flight.price}
            airline={flight.airline}
            date={flight.date}
            type={flight.type}
            time={flight.time}
            color={color}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FlightSuggestions;
