import Sidebar from "../components/Sidebar";
import Body from "../components/Body";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <Body />
    </div>
  );
};

export default HomePage;
