import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyProjects from "../components/MyProjects";
import MyServices from "../components/MyServices";
import Whoami from "../components/Whoami";

const Home = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-yellow-100">
      <Header />
      <Whoami />
      <MyProjects />
      <MyServices />
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Home;
