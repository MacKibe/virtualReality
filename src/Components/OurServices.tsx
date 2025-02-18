import { IoIosArrowDropright,IoIosArrowDroprightCircle } from "react-icons/io";
import laptop from "../assets/marketing.jpg";
const OurServices = () => {
  return (
    <div id="services" className="py-8 font-serif bg-white">
      <div className="w-[75%] m-auto py-8">
        <h2 className="text-5xl text-[#00ADB5]">Our Services</h2>
        <p className="my-4">
          At Virtual Reality Circle, we don’t just market your business—we
          position it for success. Our team of digital marketing experts
          combines strategy, creativity, and data-driven insights to help you
          attract, engage, and convert your ideal customers. Whether you need
          SEO that ranks, ads that convert, or content that captivates, we’re
          here to drive real results.
        </p>
        <p className="my-4">
          Explore our services and let’s take your business to the next level!
        </p>
        <ul className="flex flex-wrap gap-[5%] text-[#00ADB5]">
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="flex justify-center gap-[5%] items-center py-[5%] bg-[#F0F0F0]">Web Development <IoIosArrowDropright size={30}/></p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className=" flex justify-center gap-[5%] items-center py-[5%] bg-[#F0F0F0] text-[#00ADB5]">SEO<IoIosArrowDroprightCircle  size={30}/></p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">Content Marketing</p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">Social Media Marketing</p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">Pay-Per-Click Adversting</p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">Graphic Design</p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">White Label Services</p>
          </li>
          <li className="border w-[calc(30%)] text-center my-2">
            <img src={laptop} alt="" className="w-[]" />
            <p className="py-[5%] bg-[#F0F0F0] text-[#00ADB5] w-[70%] mx-auto text-wrap">Video Production & Brand Storytelling</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
