const TheTeam = ({ profiles }) => {
  return (
    <div>
      <div className="w-[75%] m-auto py-8">
        <h2 className="text-5xl text-[var(--primary)]">Meet The Team</h2>
        <p className="my-4">
          At Virtual Reality Circle, we believe that digital marketing is more
          than just algorithms and analytics—it’s about creating meaningful
          connections. Our team is a powerhouse of creativity and expertise,
          blending data-driven insights with bold ideas to drive real impact.
        </p>
        <p className="my-4">
          From brand storytelling to performance marketing, we push boundaries
          to deliver strategies that don’t just attract audiences but turn them
          into loyal customers. Meet the team shaping the future of digital
          success
        </p>
        <ul className="flex flex-wrap gap-[5%]">
          {profiles.map((profile, index) => (
            <li key={index} className="w-[20%] mb-[5%] bg-[var(--background)]">
              <img src={profile.image_url} alt="" />
              <div className="text-center p-4 text-[var(--primary)]">
                <h5>{profile.name}</h5>
                <h4>{profile.role}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheTeam;
