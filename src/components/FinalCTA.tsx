import { MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymExterior from "@/assets/gym-exterior.jpg";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5566999999999?text=Olá! Quero começar minha transformação na Full Force Academia", "_blank");
  };

  const handleMapClick = () => {
    // Replace with actual Full Force address coordinates
    window.open("https://www.google.com/maps/search/Full+Force+Academia+Matup%C3%A1+MT", "_blank");
  };

  return (
    <section className="py-24 bg-gym-light-gray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
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
                      <p className="text-sm">Rua Principal, Centro - Matupá, MT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block relative">
                <img 
                  src={gymExterior}
                  alt="Full Force Academia Exterior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gym-dark/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-foreground mb-4">
                Visite nossa academia
              </h3>
              <p className="text-muted-foreground mb-6">
                Estamos localizados no coração de Matupá. Venha conhecer nossa estrutura e nossa equipe.
              </p>
              <Button
                onClick={handleMapClick}
                variant="outline"
                size="lg"
                className="w-full md:w-auto font-bold"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Como Chegar
              </Button>
            </div>
            <div className="h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9!2d-54.9!3d-10.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDEyJzAwLjAiUyA1NMKwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
