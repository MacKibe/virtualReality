import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between py-[1%] h-[50dvh] bg-[#fff] text-[#181818] text-xm">
      <div className="flex justify-evenly w-[85%] mx-auto pt-[2%]">
        <div className="w-[30%]">
          <h2 className="text-[#A100F2] text-2xl">VR.</h2>
          <p>
            Virtual Reality Circle is a pioneering digital marketing agency that
            integrates immersive Virtual Reality (VR) experiences with
            traditional marketing methods.{" "}
          </p>
          <button className="my-4 text-[#A100F2]">Read More...</button>
        </div>

        <div className="w-[20%]">
          <h3 className="text-[#A100F2] text-2xl">Services</h3>
          <ul>
            <li className="">
              <a href="">Web development</a>
            </li>
            <li>
              <a href="">SEO</a>
            </li>
            <li>
              <a href="">Content Marketing</a>
            </li>
            <li>
              <a href="">Social Media Marketing</a>
            </li>
            <li>
              <a href="">Pay-Per-CLick Advertising</a>
            </li>
            <li>
              <a href="">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between w-[30%]">
          <div>
            <h3 className="text-[#A100F2] text-2xl">Contact Information</h3>
            <ul>
              <li>
                Phone: <b>+254 701069382</b>
              </li>
              <li>
                Email: <b>virtualreality.ke@gmail.com</b>
              </li>
              <li>
                Address: <b>Kiserian, Mutall Building</b>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#A100F2] text-2xl">Get in Touch.</h3>
            <ul className="flex gap-[7%]">
              <li>
                <a href="">
                  <FaFacebook color="blue" size={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram color="#d62976 " size={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube color="red" size={25} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin color="blue" size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-[#A100F2] py-[1%]">
          Copyright © 2025 Virtual Reality Marketing Agency, All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
