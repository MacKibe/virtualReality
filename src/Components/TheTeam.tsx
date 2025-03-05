import { Profile } from "../types";

interface TeamProps {
  profiles: Profile[];
}
const TheTeam: React.FC<TeamProps> = ({ profiles }) => {
  return (
    <div>
      <div className="px-[10%]">
        <h2 className="text-5xl text-[var(--primary)]">Meet The Team</h2>
        <p className="my-4">
          At Virtual Reality Circle, we believe that digital marketing is more
          than just algorithms and analytics.
        </p>
        <ul className="flex flex-wrap justify-center gap-[5%]">
          {profiles.map((profile: Profile, index: number) => (
            <li
              key={index}
              className="md:w-[calc(20%)] w-[calc(70%)] mt-[4%] bg-[var(--background)] rounded-4xl"
            >
              <img src={profile.image_url} alt="" />
              <div className="text-center p-4 text-[var(--primary)]">
                <h5 className="text-[var(--text)]">{profile.name}</h5>
                <h4 className="text-xl">{profile.role}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheTeam;
