
import Header from "./components/Header"
import Hero from "./components/Hero"
import EqInfo from "./components/EqInfo"
import ScrollBox from "./components/ScrollBox"
import SelfImprovement from "./components/SelfImprovement"
import Meet from "./components/Meet"
import Sign from "./components/Sign"
import Anonymous  from "./components/Anonymous";
import Work from "./components/Work.jsx"
import Vacancy from "./components/Vacancy.jsx"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-10 overflow-hidden bg-white">
        <Hero/>
        <EqInfo/> 
        <ScrollBox/>
        <Meet/>
        <SelfImprovement/>
        <EqInfo/>
        <Anonymous/>
        <Sign/>
        <Work/>
        <Vacancy/>
        <Footer/>
      </div>

    </div>
  );
}