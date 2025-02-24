import marketing from "../assets/marketing.png";
const Hero = () => {
  return (
    <div className="flex h-[90dvh] w-[90%] mx-auto gap-[10%]">
      <div className="flex  flex-col justify-center items-end text-right w-[60%] ">
        <h2 className="text-2xl">
          Welcome To Virtual Reality Marketing Agency
        </h2>
        <h1 className="text-7xl text-[#00ADB5]">Transform Your Reality</h1>
        <h3 className=" w-[55%]">
          We create immersive virtual experience that push the boundaries of
          what's possible.
        </h3>
        <a href="#services" className="px-8 py-4 my-4 border-2 text-[#F0F0F0] bg-[#A100F2] rounded-xl">
          Get Started
        </a>
      </div>
      <div className="flex justify-center items-center w-[40%]">
        <img src={marketing}/>
      </div>
    </div>
  );
};

export default Hero;
