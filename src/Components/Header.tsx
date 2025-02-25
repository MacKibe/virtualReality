import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
const Header = () => {
  return (
    <ul className="hidden md:flex justify-end gap-[2%] text-[var(--primary)] items-center p-2 font-bold">
      <li className="flex items-center gap-2">
        <MdLocalPhone style={{ color: 'var(--secondary)' }} size={25} />
        +254 701069382
      </li>
      <li>|</li>
      <li className="flex items-center gap-2">
        <MdEmail style={{ color: 'var(--secondary)' }} size={25} />
        virtualrealitycircle.ke@gmail.com
      </li>
      <li>|</li>
      <ul className="flex justify-end gap-[7%]">
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
    </ul>
  );
};

export default Header;
