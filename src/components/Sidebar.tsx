import { Link } from "react-router-dom";
import pic from "../assets/about-pic.jpg";

const Sidebar = () => {
  return (
    <div className="bg-secondary p-5 w-full flex flex-col justify-between gap-14 text-text md:w-1/4 md:min-h-screen">
      <div>
        <Link to='/' className="text-6xl font-semibold md:text-3xl">
          THE WORLD ACCORDING TO ELO
        </Link>
        <p className="font-light text-sm italic">
          Because overthinking deserves a stage...
        </p>
      </div>

      <div className="flex gap-5 md:flex-col">
        <div className="w-20 md:w-40">
          <img
            src={pic}
            alt="Profile Picture"
            className="w-full object-contain"
          />
        </div>

        <p>
          I'm Elo and this is my view of the world.{" "}
          <Link
            to="/about"
            className="text-accent font-semibold cursor-pointer"
          >
            More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
