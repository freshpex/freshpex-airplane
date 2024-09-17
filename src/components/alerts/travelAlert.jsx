import WarningIcon from "../../assets/icons/warningIcon";

const TravelAlert = () => {
  return (
    <div className="relative bg-yellow-50 text-gray-800 text-center py-6 px-6 mt-8 rounded-md max-w-6xl mx-auto shadow-lg border border-yellow-300 hover:border-yellow-400 transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 animate-gradient-x"></div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
        <WarningIcon className="mb-4 md:mb-0 w-10 h-10 text-yellow-600 animate-blink" />{" "}
        {/* Added animate-blink */}
        <div className="text-left md:ml-4">
          <p className="font-[Avenir_LT_Std-Regular] text-[#4d4d4d] text-base font-semibold leading-4 pb-2 animate-fadeIn">
            Active travel alert
          </p>
          <p className="font-[Avenir_LT_Std-Regular] text-[#4d4d4d] text-base font-normal leading-4 animate-fadeIn">
            There is a travel warning issued by the government due to the
            coronavirus epidemic (COVID-19).{" "}
            <a
              href="#"
              className="underline text-blue-600 hover:text-blue-800 hover:underline-offset-4 transition-all duration-300"
            >
              More details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelAlert;
