import "./App.css";
import Navbar from "./Components/Navbar.js"
import MainPage from "./Components/MainPage.js";
import FeaturesPage from "./Components/FeaturesPage.js";
import Footer from "./Components/Footer.js"
import TestimonialPage from "./Components/TestimonialPage.js";
import JoinUsPage from "./Components/JoinUsPage.js";

function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <FeaturesPage />
      <TestimonialPage />
      <JoinUsPage />
      <Footer />
    </>
  );
}

export default App;
