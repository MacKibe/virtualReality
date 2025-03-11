import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col justify-between py-[1%] h-[50dvh] bg-[#fff] text-[#181818]">
      <div className="flex flex-col md:flex-row justify-evenly w-[85%] md:w-[85%] mx-auto pt-[2%]">
        <div className="flex-1">
          <h2 className="text-[#A100F2] my-4">VR.</h2>
          <p>
            Virtual Reality Circle is a pioneering digital marketing agency that
            integrates immersive Virtual Reality (VR) experiences with
            traditional marketing methods.{" "}
          </p>
          <button className="my-4 text-[#A100F2]">Read More...</button>
        </div>

        <div className="flex flex-col md:flex-row flex-1 justify-evenly">
          <div>
            <h3 className="text-[#A100F2] text-2xl my-4">Services</h3>
            <ul>
              <li>
                <a>Web development</a>
              </li>
              <li>
                <a>SEO</a>
              </li>
              <li>
                <a>Content Marketing</a>
              </li>
              <li>
                <a>Social Media Marketing</a>
              </li>
              <li>
                <a>Pay-Per-CLick Advertising</a>
              </li>
              <li>
                <a>Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[#A100F2] text-2xl my-4">
                Contact Information
              </h3>
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
              <h3 className="text-[#A100F2] text-2xl my-4">Get in Touch.</h3>
              <ul className="flex gap-[7%]">
                <li>
                  <a>
                    <FaFacebook color="blue" size={25} />
                  </a>
                </li>
                <li>
                  <a>
                    <FaInstagram color="#d62976 " size={25} />
                  </a>
                </li>
                <li>
                  <a>
                    <FaYoutube color="red" size={25} />
                  </a>
                </li>
                <li>
                  <a>
                    <FaLinkedin color="blue" size={25} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-[#A100F2] py-[5%] md:py-[1%]">
          Copyright © 2025 Virtual Reality Marketing Agency, All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
