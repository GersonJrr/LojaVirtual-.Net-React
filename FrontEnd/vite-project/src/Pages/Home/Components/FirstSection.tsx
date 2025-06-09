import bgPizza from "../../../assets/bgPizza.svg";

function FirstSection() {
  return (
    <div className="relative ">
      <img
        src={bgPizza}
        alt="pizza background"
        className="w-full h-[570px] object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl font-extrabold">Pizza Palace</h1>
        <p className="text-base font-normal mb-6 max-w-md">
          A melhor pizza da cidade, entregue quentinha na sua porta.
        </p>
        <button className="bg-[var(--cor-vermelho-bg)] text-white px-6 py-2 rounded hover:bg-[var(--cor-bege-claro)] transition">
          Ver Menu
        </button>
      </div>
    </div>
  );
}

export default FirstSection;
