import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import CardSection from '../../Components/CardSection';
import PizzaShop from './Components/PizzaShop';

function PizzasPage() {


  return (
    <>
      <NavBar/>
      <CardSection title="Pizzas" caminho="Pizzas" />
      <PizzaShop/>
      <Footer/>
    </>
  );
}

export default PizzasPage;
