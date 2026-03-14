import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 font-sans">
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

      {/* RODAPÉ / ENDEREÇO - Henrique Gusmão */}
      <footer
        id="contato"
        className="bg-slate-900 text-white py-12 border-t-8 border-[#0F55C9]"
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-2">Henrique Gusmão</h3>
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
