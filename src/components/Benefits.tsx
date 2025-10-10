import { Heart, Dumbbell, Clock } from "lucide-react";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymCardio from "@/assets/gym-cardio.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Ambiente acolhedor",
      description: "Aqui, todo mundo te conhece pelo nome.",
    },
    {
      icon: Dumbbell,
      title: "Equipamentos modernos",
      description: "Estrutura completa para você treinar com segurança.",
    },
    {
      icon: Clock,
      title: "Horário flexível",
      description: "Abertos das 04h30 às 21h sem parar.",
    },
  ];

  <section class="galeria">
  <h2>Conheça Nossa Estrutura</h2>
  <div class="grid-galeria">
    <div class="foto-galeria">
      <img src="musculacao.webp" alt="Área de musculação Full Force Matupá" loading="lazy">
      <span class="legenda">Equipamentos de musculação novos 2024</span>
    </div>
    <div class="foto-galeria">
      <img src="cardio.webp" alt="Área de cardio" loading="lazy">
      <span class="legenda">Área de cardio completa</span>
    </div>
    <div class="foto-galeria">
      <img src="espaco-kids.webp" alt="Espaço kids" loading="lazy">
      <span class="legenda">Espaço kids para seus filhos</span>
    </div>
    <div class="foto-galeria">
      <img src="funcional.webp" alt="Área funcional" loading="lazy">
      <span class="legenda">Treino funcional</span>
    </div>
    <div class="foto-galeria">
      <img src="halteres.webp" alt="Rack de halteres" loading="lazy">
      <span class="legenda">Halteres profissionais</span>
    </div>
    <div class="foto-galeria">
      <img src="recepção.webp" alt="Recepção" loading="lazy">
      <span class="legenda">Recepção e atendimento</span>
    </div>
    <div class="foto-galeria">
      <img src="vestiario.webp" alt="Vestiário" loading="lazy">
      <span class="legenda">Vestiários limpos</span>
    </div>
    <div class="foto-galeria">
      <img src="logo-3d.webp" alt="Logo Full Force" loading="lazy">
      <span class="legenda">Full Force - Sua academia em Matupá</span>
    </div>
  </div>
</section>

  return (
    /* Background hero mais impactante */
.hero {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), 
              url('equipamentos-background.webp');
  background-size: cover;
  background-position: center;
}

/* Aumentar contraste dos títulos */
h1, h2, h3 {
  font-weight: 800; /* Mais bold */
  text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
}

/* Amarelo mais vibrante */
:root {
  --primary-yellow: #F9A825; /* Do Site A */
}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Mais que uma academia,{" "}
            <span className="text-primary">um lugar para você se sentir em casa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group transition-smooth hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-smooth">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-16">
          <div className="relative overflow-hidden rounded-2xl shadow-card group">
            <img 
              src={gymEquipment}
              alt="Equipamentos Full Force"
              className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gym-dark/80 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-xl">Equipamentos de última geração</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-card group">
            <img 
              src={gymCardio}
              alt="Área de cardio Full Force"
              className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gym-dark/80 to-transparent flex items-end p-6">
              <p className="text-white font-bold text-xl">Área de cardio completa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
