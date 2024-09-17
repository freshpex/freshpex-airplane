import FirstImage from "../../../../assets/images/firstImage.png";
import Header from "../../../../components/header";

const TopSection = () => {
  return (
    <div className="relative relative parallax bg-cover">
      <img
        src={FirstImage}
        className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
        alt="Airport"
      />

      <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-16 lg:pr-24 fade-in">
        <div className="text-right">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide leading-snug">
            We are here for you.
          </p>
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide leading-snug mt-4">
            Worldwide
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default TopSection;
