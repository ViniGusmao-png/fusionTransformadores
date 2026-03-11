import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 font-sans">
      {/* HEADER - Branding Fusion */}
      <nav className="bg-[#0F55C9] h-20 flex flex-row items-center px-10 shadow-lg sticky top-0 z-50">
        <div className="w-1/3 flex justify-start">
          {/* Substitua pelo arquivo do seu logo recortado */}
          <div className="text-white font-bold text-2xl tracking-tighter italic">
            FUSION{" "}
            <span className="text-sm block not-italic font-light">
              TRANSFORMADORES
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-8 w-2/3 justify-end text-white font-medium">
          <a href="#home" className="hover:text-slate-300 transition">
            Início
          </a>
          <a href="#produtos" className="hover:text-slate-300 transition">
            Produtos
          </a>
          <a href="#contato" className="hover:text-slate-300 transition">
            Contato
          </a>
          {/* <button className="bg-white text-[#0F55C9] px-4 py-1 rounded-full font-bold hover:bg-slate-100 transition">
            Orçamento
          </button> */}
        </div>
      </nav>

      <section
        id="home"
        className="relative h-[500px] flex items-center justify-center bg-slate-900 overflow-hidden"
      >
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
                <span className="text-slate-400">Imagem Autotransformador</span>
              </div>
              <h3 className="font-bold text-xl text-[#0F55C9] mb-2">
                Autotransformador Trifásico
              </h3>
              <p className="text-sm text-slate-600">
                Ideal para adequação de tensão em máquinas industriais.
              </p>
            </div>

            {/* Card 2 - Isolador */}
            <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="h-48 bg-slate-100 mb-4 rounded flex items-center justify-center">
                <span className="text-slate-400">
                  Imagem Isolador de Comando
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Segurança e estabilidade no funcionamento de painéis elétricos.
              </p>
            </div>

            {/* Card 3 - Placa PCI */}
            <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="h-48 bg-slate-100 mb-4 rounded flex items-center justify-center">
                <span className="text-slate-400">Imagem Transformador PCI</span>
              </div>
              <h3 className="font-bold text-xl text-[#0F55C9] mb-2">
                Transformador Placa PCI
              </h3>
              <p className="text-sm text-slate-600">
                Alimentação de circuitos eletrônicos com tamanho compacto.
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
            <p className="flex items-center gap-2 text-green-400 font-bold">
              💬 (11) 98252-6643
            </p>
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
