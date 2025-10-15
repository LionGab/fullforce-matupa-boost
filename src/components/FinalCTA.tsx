import { MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5566999100808?text=Olá! Quero começar minha transformação na Full Force Academia",
      "_blank"
    );
  };

  const handleMapClick = () => {
    window.open(
      "https://maps.app.goo.gl/itq6WePmD4d2a5mW7",
      "_blank"
    );
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-900 rounded-2xl sm:rounded-3xl shadow-glow-primary overflow-hidden border border-primary/20">
            <div className="grid md:grid-cols-2">
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Mais de{" "}
                  <span className="text-primary">700 Alunos Já Começaram.</span>
                  <br />
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mt-2 block">
                    Falta Só Você.
                  </span>
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                  Você chegou até aqui porque algo dentro de você <strong className="text-white">QUER mudar</strong>.
                </p>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Não é sobre ter o corpo perfeito. É sobre se sentir bem na própria pele. É sobre ter energia pra viver melhor. É sobre conquistar a confiança que você merece.
                  <br /><br />
                  A Full Force não é só uma academia. É o lugar onde você vai <strong className="text-primary">PARAR DE ADIAR</strong> e <strong className="text-primary">COMEÇAR A AGIR</strong>.
                  <br /><br />
                  <span className="text-white font-semibold">O primeiro passo é sempre o mais difícil. Mas depois dele, tudo muda.</span>
                </p>

                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  variant="premium"
                  className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 h-auto transition-smooth shadow-glow-primary hover:scale-105 mb-6 sm:mb-8 w-full md:w-auto"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <span className="leading-tight">🔥 Falar com o Time no WhatsApp Agora</span>
                </Button>

                <div className="space-y-3 sm:space-y-4 text-neutral-300">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm md:text-base">⏰ Quando Você Pode Treinar:</p>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Segunda a Sexta: 04h30 às 21h (sem fechar no almoço)
                      </p>
                      <p className="text-xs sm:text-sm leading-relaxed">Sábado: 06h às 12h</p>
                      <p className="text-xs sm:text-sm text-primary font-semibold mt-1">A gente se adapta à SUA rotina.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-1" />
                    <div>
                      <p className="font-bold text-white text-xs sm:text-sm md:text-base">📍 Onde Estamos:</p>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Rua 09, Nº 203 — Centro — ZC1004, Matupá - MT, 78525-000
                      </p>
                      <p className="text-xs sm:text-sm text-primary font-semibold mt-1">No coração da cidade, fácil de chegar.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative min-h-[300px] lg:min-h-[400px]">
                <img
                  src="/images/Fachada/fffrente.jpg"
                  alt="Full Force Academia Exterior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-950/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-neutral-950 rounded-xl sm:rounded-2xl shadow-card overflow-hidden border border-neutral-800">
          <div className="grid md:grid-cols-2">
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4">
                🗺️ Visite Nossa Academia
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-neutral-300 mb-4 sm:mb-6 leading-relaxed">
                Estamos localizados no coração de Matupá. Venha conhecer nossa estrutura completa e conversar com nossa equipe. Estamos te esperando!
              </p>
              <Button
                onClick={handleMapClick}
                variant="outline"
                size="lg"
                className="w-full md:w-auto font-bold border-primary/50 text-primary hover:bg-primary hover:text-black transition-smooth text-sm sm:text-base"
              >
                <Navigation className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                📍 Como Chegar
              </Button>
            </div>

            <div className="h-56 sm:h-64 md:h-auto min-h-[300px] bg-neutral-950 flex items-center justify-center relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.130764383648!2d-54.934846400000005!3d-10.1700249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9307230407413685%3A0x34e16236e349495d!2sAcademia%20Full%20Force!5e0!3m2!1spt-BR!2sbr!4v1760051000126!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
                title="Localização Full Force Academia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
