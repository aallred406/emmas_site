import heroImgXl from "../assets/kaylee.jpg";
import { Card } from "../components/Card";
import { TextLink } from "../components/TextLink";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 text-center">
        <h1 className="text-4xl md:text-8xl mb-0 text-gray-800 font-aboreto">
          Emma LaRhea Photography
        </h1>
      </div>
      <div>
        <LazyLoadImage
          src={heroImgXl}
          alt=""
          effect="blur"
          className="w-full h-auto object-cover"
          placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E"
        />
      </div>

      {/* Select Works Section */}
      <div className=" bg-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <h2 className="font-bodoni text-4xl">Select Works</h2>
            <TextLink to="/gallery" text="View Work" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              imageSrc="https://picsum.photos/400/600?random=1"
              title="Weddings"
            />
            <Card
              imageSrc="https://picsum.photos/400/600?random=2"
              title="Engagements"
            />
            <Card
              imageSrc="https://picsum.photos/400/600?random=3"
              title="Portraits"
            />
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-3">
        <div className="flex justify-between items-end">
          <h2 className="font-bodoni text-4xl">Services</h2>
          <TextLink to="/gallery" text="View Packages" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card imageSrc="https://picsum.photos/400/600?random=4" />
          <Card imageSrc="https://picsum.photos/400/600?random=5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
