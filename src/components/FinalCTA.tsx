import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymExterior from "@/assets/gym-exterior.jpg";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5566999999999?text=Olá! Quero começar minha transformação na Full Force Academia", "_blank");
  };

  return (
    <section className="py-24 bg-gym-light-gray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gym-dark to-gym-gray rounded-3xl shadow-yellow overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Pronta para começar sua transformação em{" "}
                  <span className="text-primary">Matupá</span>?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Junte-se aos mais de <strong className="text-primary">700 alunos</strong> que já deram o primeiro passo. 
                  Nossa equipe está pronta para te receber.
                </p>

                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto transition-smooth shadow-yellow hover:scale-105 mb-8 w-full md:w-auto"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Falar com o time no WhatsApp
                </Button>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white">Nosso horário:</p>
                      <p className="text-sm">Segunda a Sexta, das 04h30 às 21h, sem fechar no almoço</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-white">Onde estamos:</p>
                      <p className="text-sm">Matupá, Mato Grosso</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative">
                <img 
                  src={gymExterior}
                  alt="Full Force Academia Exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gym-dark/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
