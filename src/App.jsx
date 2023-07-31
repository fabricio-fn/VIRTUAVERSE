import About from "./assets/components/About/About";
import Enter from "./assets/components/Enter/Enter";
import Footer from "./assets/components/Footer/Footer";
import Founder from "./assets/components/Founder/Founder";
import Header from "./assets/components/Header/Header";
import Home from "./assets/components/Home/Home";
import HowWorks from "./assets/components/HowWorks/HowWorks";
import Insight from "./assets/components/Insight/Insight";
import PeopleOnTheWorld from "./assets/components/PeopleOnTheWorld/PeopleOnTheWorld";
import TheWorld from "./assets/components/TheWorld/TheWorld";
import WhatsNew from "./assets/components/WhatsNew/WhatsNew";

export default function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <TheWorld />
      <HowWorks />
      <WhatsNew />
      <PeopleOnTheWorld />
      <Insight />
      <Founder />
      <Enter />
      <Footer />
    </>
  )
}