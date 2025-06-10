function LocalizacaoContato() {
  return (
    <section id="localizacao" className="w-full flex flex-col items-center px-4 py-8 gap-12">

      <div className="w-full max-w-6xl">
        <h1 className="text-left text-[22px] font-bold mb-4">Localização</h1>
        <iframe
          title="Localização"
          className="w-full h-[280px] rounded-md"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.232222186119!2d-46.65657458502168!3d-23.59113948466702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c6c984b26d%3A0x2d9a737012a35adf!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1717632112345!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>

      <div id="contato" className="w-full max-w-6xl">
        <h1 className="text-left text-[22px] font-bold mb-4">Contato</h1>
        <span className="block mb-1">Telefone: (11) 9633-31218</span>
        <span className="block">Email: juniormiranda43@gmail.com</span>
      </div>
    </section>
  );
}

export default LocalizacaoContato;
