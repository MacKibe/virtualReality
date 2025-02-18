import profileImg from "../assets/profile.jpg";
const TheTeam = () => {
  return (
    <div className="bg-white">
      <div className="w-[75%] bg-white m-auto py-8">
        <h2 className="text-5xl text-[#00ADB5]">Meet The Team</h2>
        <p className="my-4">
          At Virtual Reality Circle, we believe that digital marketing is more
          than just algorithms and analytics—it’s about creating meaningful
          connections. Our team is a powerhouse of creativity and expertise,
          blending data-driven insights with bold ideas to drive real impact.{" "}
        </p>
        <p className="my-4">
          From brand storytelling to performance marketing, we push boundaries
          to deliver strategies that don’t just attract audiences but turn them
          into loyal customers. Meet the team shaping the future of digital
          success
        </p>
        <ul className="flex flex-wrap gap-[5%]">
          <li className="w-[30%] mb-[5%] bg-[#181818]">
            <img src={profileImg} alt="" />
            <div className="text-center p-4 text-[#00ADB5]">
              <h5>Muli Palstau</h5>
              <h4>Web Developer</h4>
            </div>
          </li>
          <li className="w-[30%] mb-[5%] bg-[#181818]">
            <img src={profileImg} alt="" />
            <div className="text-center p-4 text-[#00ADB5]">
              <h5>Muli Palstau</h5>
              <h4>Web Developer</h4>
            </div>
          </li>
          <li className="w-[30%] mb-[5%] bg-[#181818]">
            <img src={profileImg} alt="" />
            <div className="text-center p-4 text-[#00ADB5]">
              <h5>Muli Palstau</h5>
              <h4>Web Developer</h4>
            </div>
          </li>
          <li className="w-[30%] mb-[5%] bg-[#181818]">
            <img src={profileImg} alt="" />
            <div className="text-center p-4 text-[#00ADB5]">
              <h5>Muli Palstau</h5>
              <h4>Web Developer</h4>
            </div>
          </li>
          <li className="w-[30%] mb-[5%] bg-[#181818]">
            <img src={profileImg} alt="" />
            <div className="text-center p-4 text-[#00ADB5]">
              <h5>Muli Palstau</h5>
              <h4>Web Developer</h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheTeam;
