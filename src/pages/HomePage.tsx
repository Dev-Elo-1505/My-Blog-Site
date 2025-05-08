import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <div className="w-full flex flex-col justify-between min-h-screen">
      <Body />
      <Footer />
      </div>
      
    </div>
  );
};

export default HomePage;
