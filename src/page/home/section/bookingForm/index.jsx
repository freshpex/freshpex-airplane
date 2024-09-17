import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { Arrow2 } from "../../../../assets/icons/arrow2.jsx";
import { motion } from "framer-motion";

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState("buy-tickets");

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="absolute left top-[-140px] [text-shadow:0px_4px_4px_#0000009c] font-normal text-white text-2xl z-20">
        Book now!
      </div>

      <div
        className="bg-white pt-6 pb-24 px-12 rounded-lg shadow-lg relative z-10 mb-[-100px]"
        style={{ top: "-100px" }}
      >
        <div className="flex border-b border-gray-300 m-6 gap-12">
          <button
            onClick={() => setActiveTab("buy-tickets")}
            className={`py-2 px-4 text-lg font-medium transition-all duration-300 ${activeTab === "buy-tickets" ? "text-orange-400 border-b-2 border-b-orange-400" : "text-gray-600 hover:text-gray-800 hover:border-b-gray-300"}`}
          >
            Buy Tickets
          </button>
          <button
            onClick={() => setActiveTab("check-status")}
            className={`py-2 px-4 text-lg font-medium ${activeTab === "check-status" ? "text-orange-400 border-b-2 border-b-orange-400" : "text-gray-600"}`}
          >
            Check Your Flight Status
          </button>
        </div>

        {/* Animated form content switching */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Form content */}
          {activeTab === "buy-tickets" && (
            <div className="space-y-4 m-4 md:m-8">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="trip"
                    className="w-6 h-6 text-yellow-50 bg-yellow-50 border-yellow-50 checked:bg-yellow-200 checked:border-yellow-200 checked:ring-0 focus:ring-0"
                  />
                  <span className="text-lg">One way</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="trip"
                    className="w-6 h-6 text-yellow-50 bg-yellow-50 border-yellow-50 checked:bg-yellow-200 checked:border-yellow-200 checked:ring-0 focus:ring-0"
                  />
                  <span className="text-lg">Round trip</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="trip"
                    className="w-6 h-6 text-yellow-50 bg-yellow-50 border-yellow-50 checked:bg-yellow-200 checked:border-yellow-200 checked:ring-0 focus:ring-0"
                  />
                  <span className="text-lg">Multi-city</span>
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative w-[244px] ml-10">
                  <label
                    htmlFor="from"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    From
                  </label>
                  <div className="relative">
                    <FaPlane className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="from"
                      className="w-full p-2 pl-4 pr-10 border border-gray-300 rounded-md"
                      placeholder="Select Departure..."
                    />
                    <Arrow2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative w-[244px] ml-5">
                  <label
                    htmlFor="to"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    To
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="to"
                      className="w-full p-2 pr-10 border border-gray-300 rounded-md"
                      placeholder="Select Destination..."
                    />
                    <Arrow2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="relative w-[244px]">
                  <label
                    htmlFor="departure"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Departure Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="departure"
                      className="w-full p-2 pr-15 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Empty Space */}
                <div>
                  <div className="w-0 h-0"></div>
                </div>

                <div className="relative col-span-1 w-[244px] ml-5">
                  <button className="w-full bg-orange-300 text-white font-normal text-lg py-1 mt-6">
                    Book now!
                  </button>
                </div>

                <div className="relative w-[244px]">
                  <label
                    htmlFor="passengers"
                    className="block text-sm text-gray-600 mb-1"
                  >
                    Passengers
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="passengers"
                      className="w-full p-2 pr-15 border border-gray-300 rounded-md"
                      placeholder="1 adult"
                    />
                    <Arrow2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "check-status" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Flight Number"
                className="w-full border border-gray-300 p-3 rounded-md"
              />
              <button className="mt-6 w-full bg-orange-600 text-white font-normal text-lg rounded-full py-3">
                Check Status
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;
