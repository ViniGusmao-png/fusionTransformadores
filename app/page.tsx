import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 font-sans">

      <a
        href="https://wa.me/5511939334749"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Contato via WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Fale Conosco
        </span>
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.41 0 .01 5.399.007 12.039c0 2.122.554 4.197 1.604 6.02L0 24l6.117-1.605a11.803 11.803 0 005.925 1.597h.005c6.637 0 12.037-5.399 12.04-12.039a11.776 11.776 0 00-3.489-8.482" />
        </svg>
      </a>

      <nav className="bg-[#0F55C9] h-20 flex flex-row items-center pr-10 md:px-10  shadow-lg sticky top-0 z-50">
        <div className="w-1/3 flex justify-start">
          <img src={`/logo.png`} alt="Fusion" className="h-15 md:h-24 w-auto" />
        </div>
        <div className="flex flex-row gap-4 md:gap-8 w-2/3 justify-end text-white font-medium">
          <a href="#home" className="hover:text-slate-300 transition">
            Início
          </a>
          <a href="#produtos" className="hover:text-slate-300 transition">
            Produtos
          </a>
          <a href="#contato" className="hover:text-slate-300 transition">
            Contato
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative h-[400px] flex items-center justify-center bg-slate-900 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <style>{`
        @keyframes lightning-flash {
          0%, 10%, 90%, 100% { opacity: 0; }
          11%, 14%, 80% { opacity: 1; stroke-width: 0.7; }
          12%, 81% { opacity: 0.2; }
          13% { opacity: 0.8; }
        }
        .ray { fill: none; stroke: #dfe6ff; filter: drop-shadow(0 0 8px #0F55C9); }
        .ray-1 { animation: lightning-flash 5s infinite; }
        .ray-2 { animation: lightning-flash 8s infinite 2s; }
        .ray-3 { animation: lightning-flash 6s infinite 4s; }
      `}</style>
            <path
              className="ray ray-1"
              d="M 15,0 L 10,20 L 18,35 L 8,55 L 14,75 L 10,100"
            />
            <path
              className="ray ray-2"
              d="M 85,0 L 90,20 L 82,40 L 92,60 L 85,80 L 88,100"
            />
            <path
              className="ray ray-3"
              d="M 50,0 L 53,15 L 47,30 L 52,50 L 48,70 L 50,100"
            />
          </svg>
        </div>
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold mb-4 uppercase italic">
            Alta Tecnologia em Energia
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Fabricação, conserto e manutenção de transformadores em Jundiaí –
            SP. Soluções robustas para o seu sistema elétrico industrial.
          </p>
        </div>
      </section>

      {/* NOSSOS PRODUTOS - Seção de Destaque */}
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 uppercase tracking-widest border-b-4 border-[#0F55C9] inline-block pb-2">
            {" "}
             Nossos Produtos{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Autotransformador */}
            <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition group">
              <div className="h-48 bg-slate-100 mb-4 rounded flex items-center justify-center relative overflow-hidden">
                <span className="text-slate-400">
                  <img src="/transformador4.png" alt="trifasico" className="h-50" />
                </span>
              </div>
              <h3 className="font-bold text-xl text-[#0F55C9] mb-2">
                Autotransformador Trifásico
              </h3>
              <p className="text-sm text-slate-600">
               Solução ideial para adequação de tensão em máquinas e equipamentos industriais, garantindo segurança, eficiência e desempenho no seu sistema elétrico.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="h-48 bg-slate-100 mb-4 rounded flex items-center justify-center">
                <span className="text-slate-400">
                  <img src="/transformador3.png" alt="Isolador para comando" className="h-50" />
                </span>
              </div>
              <h3 className="font-bold text-xl text-[#0F55C9] mb-2">
                Trasnformador Isolador para comando
              </h3>
              <p className="text-sm text-slate-600">
                Equipamento desenvolvido para alimentação e isolamento de circuitos de comando, garantindo maior segurança e estabilidade no funcionamento de máquinas e painéis elétricos industriais.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="h-48 bg-slate-100 mb-4 rounded flex items-center justify-center">
                <span className="text-slate-400">
                  <img src="/transformador1.png" alt="transformador para placa PCI" className="h-50" />
                </span>
              </div>
              <h3 className="font-bold text-xl text-[#0F55C9] mb-2">
                Transformador para placa PCI
              </h3>
              <p className="text-sm text-slate-600">
                Transformador desenvolvido para alimentção de circuitos eletrônicos e placas de controle, garantindo estabilidade, segurança e desempenho em equipamentos eletrônicos e sistemas de automação.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer
        id="contato"
        className="bg-slate-900 text-white py-12 border-t-8 border-[#0F55C9]"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2">Fusion Transformadores</h3>
            <p className="text-[#0F55C9] font-medium mb-4 italic">
              Transformadores & Manutenção
            </p>
            <p className="flex items-center gap-2">📍 Jundiaí – SP</p>
            <a
              href="https://wa.me/5511939334749"
              target="_blank"
              className="flex items-center gap-2 text-green-400 font-bold hover:underline"
            >
              💬 (11) 93933-4749
            </a>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117359.05484704857!2d-46.98910156675766!3d-23.18951930423035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf24293cc00531%3A0xf686a1c1163c6bbb!2zSnVuZGlhw60gLSBBZ2xvbWVyYcOnw6NvIFVyYmFuYSBkZSBKdW5kaWHDrSwgSnVuZGlhw60gLSBTUA!5e0!3m2!1spt-BR!2sbr!4v1773442192982!5m2!1spt-BR!2sbr"
              className="sm:w-100 md:w-100 lg:w-145 xl:200 h-75"
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h4 className="font-bold mb-4 uppercase tracking-tighter text-slate-400">
              Nossos Serviços
            </h4>
            <ul className="text-sm space-y-2">
              <li>• Fabricação com alta qualidade</li>
              <li>• Conserto de Equipamentos</li>
              <li>• Manutenção Especializada</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-xs text-slate-500">
          © 2026 Fusion Transformadores - Soluções em Energia.
        </div>
      </footer>
    </div>
  );
}
