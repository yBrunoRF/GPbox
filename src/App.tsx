import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Gamepad2,
  CheckCircle2,
  ShieldCheck,
  MonitorPlay,
  WifiOff,
  Usb,
  Infinity as InfinityIcon,
  ChevronRight,
  Lock,
  Play
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  const today = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });

  const affiliateLink = "https://pay.kiwify.com.br/iLDn5K5?afid=EA0RbmtH";

  return (
    <div className="min-h-screen font-sans selection:bg-red-500/30">
      
      {/* 1. URGENCY BANNER */}
      <div className="bg-[#8b0000] text-white text-xs md:text-sm font-bold text-center py-2 px-4 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-50 relative tracking-wider">
        <span className="animate-pulse text-red-500 font-extrabold mr-1">ATENÇÃO!</span> 
        <span>{today} Promoção válida somente hoje.</span>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        
        {/* LOGO / OVERHEAD */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8 text-red-500"
        >
          <Gamepad2 className="w-8 h-8 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          <h1 className="font-display font-bold text-3xl tracking-widest drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            GPBOX
          </h1>
        </motion.div>

        {/* 2. IMPACTFUL HEADLINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center max-w-3xl mb-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Transforme seu PC em um Videogame Retrô com <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">+7.000 Jogos Clássicos</span> e Instalação em <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">1 Clique.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-medium">
            Reviva a era de ouro dos games! Tudo configurado, pronto para jogar e sem mensalidades.
          </p>
        </motion.div>

        {/* 3. VIDEO/IMAGE SALES CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl mb-10"
        >
          <div className="relative w-full aspect-video rounded-xl border border-red-500/30 overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-zinc-900 border-2 border-zinc-800">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/yVS-OnQeP28?autoplay=1&mute=1"
              title="GPBOX Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* 4. PRIMARY CTA BUTTON */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3 }}
           className="w-full flex justify-center mb-14"
        >
          <a
            href={affiliateLink}
            className="group relative inline-block text-center w-full sm:w-auto overflow-hidden rounded-full bg-[#00d000] hover:bg-[#00b000] px-8 md:px-12 py-5 font-bold text-white shadow-[0_0_30px_rgba(0,208,0,0.5)] animate-pulse hover:animate-none transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00b000] to-[#00d000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex flex-col items-center justify-center gap-1">
              <span className="text-xl md:text-2xl font-black uppercase tracking-wide flex items-center gap-2">
                <Gamepad2 className="w-6 h-6" /> EU QUERO REVIVER ESSA NOSTALGIA!
              </span>
              <span className="text-sm md:text-base text-green-100 font-medium tracking-wide">
                Por apenas R$ 67,00 à vista
              </span>
            </div>
          </a>
        </motion.div>

        {/* 5. BENEFITS (CHECKLIST) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-10 mb-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-[60px] rounded-full pointer-events-none"></div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-white mb-8">
            Tudo o que você recebe <span className="text-red-500">hoje:</span>
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-500/20 p-2 rounded-full text-red-500">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Mais de 7.000 Jogos</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Os maiores clássicos de PS1, SNES, Mega Drive, Arcade, N64 e muito mais em um único sistema.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-500/20 p-2 rounded-full text-red-500">
                <WifiOff className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">100% Offline</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Você não precisa de internet para jogar. Fez o download, instalou, a diversão é garantida onde você estiver.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-500/20 p-2 rounded-full text-red-500">
                <Usb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Compatível com Controles USB</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Basta plugar qualquer controle USB ou Bluetooth genérico, do PS3/PS4 ou Xbox e começar a jogar. O sistema reconhece automaticamente.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="mt-1 bg-red-500/20 p-2 rounded-full text-red-500">
                <InfinityIcon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Acesso Vitalício + Suporte</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Pagamento único! Sem surpresas no cartão. Você joga para sempre e conta com nossa equipe para tirar qualquer dúvida.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* REQUISITOS E CONTROLES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 md:p-10 mb-14 backdrop-blur-sm shadow-xl relative"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-red-600/5 blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {/* Requisitos */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Requisitos <span className="text-red-500">mínimos:</span>
              </h3>
              <ul className="space-y-3 text-zinc-300 text-sm md:text-base">
                <li className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Sistema operacional: WINDOWS® 10 64 bits preferencialmente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Processador: Intel® Core™ i3 dual core em 3ghz ou AMD Ryzen 3</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>RAM: 8 GB de memória</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Gráficos: INTEL HD 620 ou NVIDIA® GeForce® GTX ou AMD Radeon™ R5</span>
                </li>
                <li className="flex gap-2 mt-6">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Espaço em disco: 150gb disponível Versão Standard</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Espaço em disco: 1TB disponível Versão Pack Premium adicional</span>
                </li>
              </ul>
            </div>

            {/* Controles */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 text-left md:text-right">
                Controles:
              </h3>
              <div className="space-y-4 text-zinc-300 text-sm md:text-base">
                <p>
                  <strong className="text-white">CONTROLES COMPATIVEIS:</strong> Xbox 360 Controller, Sony PS4 Controller, 8BitDo SN30 Pro, Gamesir-T4, Knup USB Gamepad
                </p>
                <p>
                  Recomendamos que seja usado controles de XBOX ou um controle que seja com driver XINPUT.
                </p>
                <p>
                  DRIVER XINPUT é o mesmo driver que os controles da Microsoft utilizam, sendo assim são
                  controles que são reconhecidos como controles de XBOX pelo Windows, mesmo não sendo controles genéricos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl mb-14"
        >
          <h3 className="text-3xl md:text-5xl font-display font-bold text-center text-red-600 mb-10 tracking-wide uppercase drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Dúvidas Frequentes
          </h3>

          <div className="space-y-8">
            <div className="flex gap-4">
               <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" />
               <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">1- Funciona em MAC OS ou Linux?</h4>
                  <p className="text-zinc-400 text-sm md:text-base">Resposta: Não! O GPBOX, por enquanto, só tem compatibilidade com o sistema operacional Windows (10 ao 11).</p>
               </div>
            </div>

            <div className="flex gap-4">
               <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" />
               <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">2- Salva o progresso dos jogos para continuar depois?</h4>
                  <p className="text-zinc-400 text-sm md:text-base">Resposta: Sim! Pode salvar o progresso dos jogos e continuar depois de onde parou.</p>
               </div>
            </div>

            <div className="flex gap-4">
               <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" />
               <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">3- Posso deixar o GPBOX em um HD Externo?</h4>
                  <p className="text-zinc-400 text-sm md:text-base">Resposta: Sim! Pode deixar o GPBOX em um HD Externo. Dessa forma não ocupa espaço interno em seu computador.</p>
               </div>
            </div>

            <div className="flex gap-4">
               <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-1" />
               <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">4- Comprando agora o GPBOX, irei receber algo via Correios?</h4>
                  <p className="text-zinc-400 text-sm md:text-base">Resposta: Não! Você receberá um acesso à nossa área de membros para fazer o download, juntamente com todos os vídeos tutoriais de instalação.</p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* 6. PROMOTIONAL OFFER SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-gradient-to-b from-red-900/40 to-black/80 border border-red-600/50 rounded-3xl p-8 md:p-12 mb-14 text-center relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] flex flex-col items-center"
        >
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 tracking-wide uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Preço promocional por tempo limitado!
          </h3>
          
          <div className="flex justify-center gap-4 md:gap-8 mb-10">
            <div className="bg-black rounded-2xl w-32 md:w-40 py-6 flex flex-col items-center border border-zinc-800 shadow-2xl">
               <span className="text-5xl md:text-7xl font-bold text-white mb-2">{minutes}</span>
               <span className="text-zinc-300 text-sm md:text-lg font-medium">Minutes</span>
            </div>
            <div className="bg-black rounded-2xl w-32 md:w-40 py-6 flex flex-col items-center border border-zinc-800 shadow-2xl">
               <span className="text-5xl md:text-7xl font-bold text-white mb-2">{seconds}</span>
               <span className="text-zinc-300 text-sm md:text-lg font-medium">Seconds</span>
            </div>
          </div>

          <div className="mb-10 text-white">
             <p className="text-xl md:text-3xl font-bold mb-4 tracking-wide uppercase">
                DE <span className="line-through text-red-500 relative decoration-red-600 decoration-4">R$ 197,00</span> POR APENAS
             </p>
             <p className="text-6xl md:text-8xl font-black font-display mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                12x DE R$ 6,93
             </p>
             <p className="text-zinc-300 text-lg md:text-xl font-medium">
                No cartão ou R$ 67,00 à vista.
             </p>
          </div>

          <a
            href={affiliateLink}
            className="inline-flex flex-col md:flex-row items-center justify-center gap-2 w-full sm:w-auto bg-[#00d000] hover:bg-[#00b000] text-white font-bold text-lg md:text-2xl py-4 md:py-6 px-10 rounded-full shadow-[0_0_30px_rgba(0,208,0,0.5)] transition-all hover:scale-105 active:scale-95 uppercase tracking-wide mb-8 animate-pulse hover:animate-none group"
          >
             <Gamepad2 className="w-7 h-7" /> EU QUERO REVIVER ESSA NOSTALGIA!
          </a>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 select-none opacity-90 max-w-[400px]">
             {/* Mock payment logic, purely structural for matching image */}
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-black font-bold text-xs uppercase px-1 text-center min-w-[34px]">MC</span></div>
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-blue-900 italic font-bold text-xs min-w-[34px] text-center inline-block">VISA</span></div>
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-black font-bold text-xs min-w-[34px] text-center inline-block">elo</span></div>
             <div className="bg-orange-500 px-2 py-1 rounded shadow"><span className="text-white font-bold text-xs min-w-[34px] text-center inline-block">Hiper</span></div>
             <div className="bg-blue-400 px-2 py-1 rounded shadow"><span className="text-white font-bold text-xs min-w-[34px] text-center inline-block tracking-tighter">AMEX</span></div>
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-blue-600 font-bold text-xs min-w-[34px] text-center inline-block">Diners</span></div>
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-blue-800 font-bold text-xs min-w-[34px] text-center inline-block italic">PayPal</span></div>
             <div className="bg-white px-2 py-1 rounded shadow"><span className="text-black font-bold text-xs min-w-[34px] text-center inline-block">||| Boleto</span></div>
          </div>
        </motion.div>

        {/* 7. GUARANTEE / FOOTER SECTION */}
        <motion.div
          id="checkout-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl border-t border-zinc-800 pt-10 pb-4 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-left bg-zinc-900 border border-zinc-700/50 p-6 rounded-xl">
             <ShieldCheck className="w-16 h-16 text-green-500 flex-shrink-0" />
             <div>
               <h4 className="text-xl font-bold text-white mb-2">Risco ZERO. Garantia de 7 Dias.</h4>
               <p className="text-sm text-zinc-400">
                 Se por qualquer motivo você não gostar ou não conseguir instalar os jogos no seu PC, nós devolvemos <strong className="text-white">100% do seu dinheiro</strong> pago na mesma hora.
               </p>
             </div>
          </div>

          <p className="text-sm text-zinc-500 mb-4 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento 100% Seguro e processado em ambiente criptografado.
          </p>

          {/* Simple Mock trust badges text to avoid broken external images */}
          <div className="flex flex-wrap justify-center gap-3 text-xs text-zinc-600 font-bold uppercase tracking-widest mb-8">
            <span className="px-3 py-1 border border-zinc-800 rounded">PIX</span>
            <span className="px-3 py-1 border border-zinc-800 rounded">Visa</span>
            <span className="px-3 py-1 border border-zinc-800 rounded">Mastercard</span>
            <span className="px-3 py-1 border border-zinc-800 rounded">Boleto</span>
          </div>

          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} GPBOX. Todos os direitos reservados.<br/>
            Este site não faz parte dos sites Facebook, Google ou suas afiliadas.
          </p>
        </motion.div>

      </main>
      <Analytics />
    </div>
  );
}

