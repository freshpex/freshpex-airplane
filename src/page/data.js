import London from "../assets/images/london.svg";
import Rome from "../assets/images/rome.svg";
import Madrid from "../assets/images/madrid.svg";
import Paris from "../assets/images/paris.svg";
import discover1 from "../assets/images/discover1.svg";
import discover2 from "../assets/images/discover2.svg";
import discover3 from "../assets/images/discover3.svg";
import Flybe from "../assets/icons/flybe.svg";
import JetBlue from "../assets/icons/jetblue.svg";
import Lufthansa from "../assets/icons/lufthansa.svg";
import AirFrance from "../assets/icons/airFrance.svg";

export const discoverData = [
  {
    imgSrc: discover1,
    title: "Latest travel restrictions",
    description:
      "We provide information on the entry requirements for all countries so you can plan your flight smoothly.",
  },
  {
    imgSrc: discover2,
    title: "Install our mobile app",
    description:
      "Our mobile app provides real-time information when you are at the airport.",
  },
  {
    imgSrc: discover3,
    title: "The most beautiful destinations",
    description:
      "Have you ever considered visiting Easter Island or Alaska? These are the most unique destinations in 2022.",
  },
];

export const flightData = [
  { imgSrc: London, city: "London", price: 35, airline: Flybe },
  { imgSrc: Rome, city: "Rome", price: 45, airline: JetBlue },
  { imgSrc: Madrid, city: "Madrid", price: 25, airline: Lufthansa },
  { imgSrc: Paris, city: "Paris", price: 55, airline: AirFrance },
];

export const cheapFlightData = [
  { imgSrc: London, city: "London", price: 15, airline: Flybe },
  { imgSrc: Rome, city: "Rome", price: 25, airline: JetBlue },
  { imgSrc: Madrid, city: "Madrid", price: 15, airline: Lufthansa },
  { imgSrc: Paris, city: "Paris", price: 35, airline: AirFrance },
];
