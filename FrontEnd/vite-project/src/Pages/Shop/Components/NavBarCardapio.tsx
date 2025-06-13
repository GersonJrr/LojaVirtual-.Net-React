import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarCardapio() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = ["Pizzas", "Esfihas", "Acompanhamentos", "Bebidas", "Sobremesas"];

  const handleClick = (index: number, label: string) => {
    setSelectedIndex(index);
    const section = document.getElementById(label);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full border-b border-gray-200 h-[60px] overflow-x-auto scrollbar-hide">
      <div className="flex items-center justify-center gap-6 min-w-[700px] h-full px-4 whitespace-nowrap">
        <Link
        to="/"
        >
          <img
            src="https://mysitefotos.s3.us-east-1.amazonaws.com/LogoPizza.png"
            alt="Logo pizzaria"
            className="object-contain h-[32px]"
          />
        </Link>

        {items.map((label, index) => (
          <button
            key={index}
            onClick={() => handleClick(index, label)}
            className={`flex-shrink-0 transition-colors duration-200 ${
              selectedIndex === index ? "text-black font-bold" : "hover:opacity-80"
            }`}
            style={selectedIndex !== index ? { color: 'var(--cor-bege-Letra)' } : {}}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBarCardapio;
