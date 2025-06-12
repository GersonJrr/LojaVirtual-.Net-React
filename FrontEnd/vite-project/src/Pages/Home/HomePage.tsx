import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar"
import FirstSection from "./Components/FirstSection";
import RecomendadoSection from "../../Components/RecomendadoSection";
import LocalizacaoContato from "./Components/LocalizacaoContato";
import EsfihasSection from "./Components/EsfihasSection";
import PizzaSection from "./Components/PizzaSection";



function HomePage() {

  return (
    <div className="bg-[var(--cor-bege-bg)]">
      <NavBar/>
      <div className="w-full h-px bg-gray-200 " />

      <div className="flex flex-col items-center mt-13 gap-10">
        <FirstSection/>
        <PizzaSection/>
        <EsfihasSection/>
        <RecomendadoSection/>
        <LocalizacaoContato/>

      </div>
      <div className="w-full h-px bg-gray-200 "/>
      <Footer/>
    </div>
  )
}

export default HomePage;