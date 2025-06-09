import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar"
import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";

function HomePage() {

  return (
    <div className="bg-[var(--cor-bege-bg)]">
      <NavBar/>
      <div className="w-full h-px bg-gray-200 " />

      <div className="flex flex-col justify-center items-center mt-13 mb-20">
        <FirstSection/>
        <SecondSection/>

      </div>
      <Footer/>
    </div>
  )
}

export default HomePage;