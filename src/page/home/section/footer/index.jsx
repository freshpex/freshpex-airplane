import FacebookIcon from "../../../../assets/icons/facebookIcon";
import InstagramIcon from "../../../../assets/icons/instagramIcon";
import TwitterIcon from "../../../../assets/icons/twitterIcon";
import YoutubeIcon from "../../../../assets/icons/youtubeIcon";
import LinkedinIcon from "../../../../assets/icons/linkedinIcon";
import ApplePlay from "../../../../assets/icons/applePlay.svg";
import GooglePlay from "../../../../assets/icons/googlePlay.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-300 text-black p-10 mt-64 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-left">
          <h4 className="text-lg font-semibold">Passengers</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li className="hover:text-gray-300 transition-colors duration-300">
              Flights
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Airlines
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Park
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Security Wait Times
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Map
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Shop & Dine
            </li>
          </ul>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-lg font-semibold">Business and Community</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li className="hover:text-gray-300 transition-colors duration-300">
              About us
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Career
            </li>
          </ul>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-lg font-semibold">General</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li className="hover:text-gray-300 transition-colors duration-300">
              Contact us
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Sign Up
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300">
              Newsroom
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center mt-8">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent my-4"></div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="mt-4 flex space-x-4">
            <FacebookIcon className="w-6 h-6 transform transition-transform duration-300 hover:scale-125 hover:text-blue-600" />
            <InstagramIcon className="w-6 h-6 transform transition-transform duration-300 hover:scale-125 hover:text-pink-500" />
            <TwitterIcon className="w-6 h-6 transform transition-transform duration-300 hover:scale-125 hover:text-blue-400" />
            <YoutubeIcon className="w-6 h-6 transform transition-transform duration-300 hover:scale-125 hover:text-red-500" />
            <LinkedinIcon className="w-6 h-6 transform transition-transform duration-300 hover:scale-125 hover:text-blue-700" />
          </div>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-end">
          <h4 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-300 ease-in-out">
            Download the Utravel app
          </h4>

          <div className="mt-4 flex space-x-4">
            <img
              alt="ApplePlay"
              src={ApplePlay}
              className="w-36 h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <img
              alt="GooglePlay"
              src={GooglePlay}
              className="w-36 h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          className="bg-black hover:bg-orange-800 text-orange-700 py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-pulse"
          onClick={scrollToTop}
        >
          Go to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
