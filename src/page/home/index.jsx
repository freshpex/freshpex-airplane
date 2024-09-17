import TopSection from "./section/topSection";
import TravelAlert from "../../components/alerts/travelAlert";
import BookingForm from "./section/bookingForm";
import FlightSuggestions from "./section/flightSuggestions";
import Discover from "./section/discover";
import Footer from "./section/footer";
import { flightData } from "../../page/data.js";
import { cheapFlightData } from "../../page/data.js";
import { discoverData } from "../../page/data.js";

const Home = () => {
  return (
    <div className="space-y-10">
      <TopSection />

      <BookingForm />

      <TravelAlert />

      <FlightSuggestions
        suggestions={flightData}
        color="blue"
        more="Explore more destinations"
      />

      <Discover discoverData={discoverData} />

      <FlightSuggestions
        suggestions={cheapFlightData}
        color="yellow"
        title="Cheap flights selected for you"
        sub="4 routes in your area"
      />

      <Footer />
    </div>
  );
};

export default Home;
