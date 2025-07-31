import emmaImg from "../assets/emma.jpg";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-start gap-8">
        <img src={emmaImg} alt="" className="w-96" />
        <div className="flex flex-col gap-8 font-bodoni">
          <h1 className="text-4xl md:text-6xl font-aboreto text-gray-800 mb-6">
            Hi, I'm Emma
          </h1>
          <p>I love capturing memories and special moments.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
