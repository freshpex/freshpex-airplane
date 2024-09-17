import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FlightCard = ({
  imgSrc,
  city,
  price,
  airline,
  date,
  type,
  time,
  color,
}) => {
  return (
    <motion.div
      className={`relative w-full h-auto bg-${color || "blue"}-50 rounded-lg border border-${color}-100 flex flex-col md:flex-row shadow-md`}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with slight parallax effect on hover */}
      <motion.img
        src={imgSrc}
        alt={city}
        className="h-40 md:h-full w-full md:w-2/5 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-4 flex flex-col justify-between w-full">
        <div>
          <div className="text-lg font-normal text-gray-700">{city}</div>
          <div className="mt-2 text-sm text-gray-500">{date || "Apr 5-8"}</div>

          {/* Animation for flight type and time */}
          <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
            <motion.span
              whileHover={{ scale: 1.1, color: "#ff6600" }}
              transition={{ duration: 0.2 }}
            >
              {type || "Direct flight"}
            </motion.span>
            <FaCircle className="text-gray-400" size={6} />
            <motion.span
              whileHover={{ scale: 1.1, color: "#ff6600" }}
              transition={{ duration: 0.2 }}
            >
              {time || "3h 15 min"}
            </motion.span>
          </div>
        </div>

        <motion.img
          src={airline}
          alt="airline"
          className="h-10 w-10"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <div className="mt-4 text-lg text-right text-orange-600 object-cover">
          €{price}
        </div>
      </div>
    </motion.div>
  );
};

export default FlightCard;
