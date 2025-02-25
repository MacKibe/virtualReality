import marketing from "../assets/marketing.png";
const Hero = () => {
  return (
    <div className="flex flex-col px-[5%] text-xl">
      <div className="p-[10%]">
        <h2>Welcome To Virtual Reality Marketing Agency</h2>
        <h1 className="text-5xl text-[var(--primary)]">
          Transform Your Reality
        </h1>
        <h3>
          We create immersive virtual experience that push the boundaries of
          what's possible.
        </h3>
        <div className="mt-[10%] text-center">
          <a href="#services" className="px-[5%] py-[3%] bg-[var(--primary)] text-[var(--text)] border-2 rounded-4xl">
            Get Started
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-[70%]" src={marketing} />
      </div>
    </div>
  );
};

export default Hero;
