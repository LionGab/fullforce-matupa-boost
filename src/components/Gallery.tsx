import gymTransformation from "@/assets/gym-transformation.jpg";
import gymLighting from "@/assets/gym-lighting.jpg";
import gymSpace from "@/assets/gym-space.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymWeightsRack from "@/assets/gym-weights-rack.jpg";
import fullforceWeightsRack from "@/assets/fullforce-weights-rack.jpg";
import fullForceFacade from "@/assets/fullforce-facade-night-main.jpg";
import instrutoresGrid from "@/assets/instrutores-grid.jpg";
import equipeff3 from "@/assets/equipeff3.jpg";

// Imagens reais da academia - Assets otimizados
const images = [
  {
    src: gymTransformation,
    alt: "💪 Resultados reais com treinos personalizados - Academia completa e moderna",
    title: "Treinos Personalizados",
    category: "treino",
    description: "Cada pessoa é única. Treinos que se adaptam ao seu objetivo"
  },
  {
    src: instrutoresGrid,
    alt: "💬 Equipe de instrutores sempre ao seu lado - Personal trainers certificados",
    title: "Equipe Ao Seu Lado",
    category: "equipe",
    description: "Suporte completo durante toda sua jornada"
  },
  {
    src: gymSpace,
    alt: "Vista ampla do espaço de musculação com equipamentos de ponta",
    title: "Academia Completa",
    category: "musculacao",
    description: "Estrutura moderna e ampla"
  },
  {
    src: fullForceFacade,
    alt: "Fachada iluminada da Full Force Academia à noite com letreiro amarelo",
    title: "Nossa Fachada",
    category: "exterior",
    description: "Localização privilegiada em Matupá"
  },
  {
    src: gymLighting,
    alt: "Vista ampla da área de musculação com iluminação LED moderna em amarelo e branco",
    title: "Iluminação Moderna",
    category: "musculacao",
    description: "Ambiente motivador e energizante"
  },
  {
    src: equipeff3,
    alt: "Equipamentos de musculação de última geração organizados",
    title: "Equipamentos Premium",
    category: "equipamentos",
    description: "Aparelhos de alta tecnologia"
  },
  {
    src: fullforceWeightsRack,
    alt: "Rack organizado com anilhas e pesos livres com marca amarela Full Force",
    title: "Pesos Organizados",
    category: "equipamentos",
    description: "Tudo que você precisa ao alcance"
  },
  {
    src: gymEquipment,
    alt: "Área completa de equipamentos para treino funcional e musculação",
    title: "Área de Treino",
    category: "musculacao",
    description: "Diversidade de equipamentos"
  },
  {
    src: gymWeightsRack,
    alt: "Estação completa de pesos e anilhas para treino livre",
    title: "Treino Livre",
    category: "equipamentos",
    description: "Para iniciantes e avançados"
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-layer-1 to-layer-2"
      aria-labelledby="gallery-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-success/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight"
          >
            Conheça Nossa <span className="text-primary">Estrutura</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed px-4 sm:px-0">
            Equipamentos de ponta, ambiente climatizado e espaço amplo.
            Veja por que somos a academia mais moderna de Matupá.
          </p>
        </div>

        {/* Gallery Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl bg-layer-3 dark:bg-neutral-950 shadow-elevated hover:shadow-floating transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image with optimized loading */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
              />

              {/* Gradient Overlay - Stronger on mobile for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/50 to-transparent sm:from-neutral-900/90 sm:via-neutral-900/40 opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Content - Title + Description */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 drop-shadow-lg mb-1.5 sm:mb-2">
                  {image.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 dark:text-neutral-300 line-clamp-2 opacity-90">
                  {image.description}
                </p>
              </div>

              {/* Hover/Active border effect - Works with touch on mobile */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 group-active:border-primary/70 rounded-xl sm:rounded-2xl transition-colors duration-300 pointer-events-none" />

              {/* Category badge - Enhanced visual indicator */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary/90 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-sm shadow-lg">
                  {image.category === 'exterior' ? '🏢 Externa' :
                    image.category === 'treino' ? '💪 Treino' :
                      image.category === 'equipe' ? '💬 Equipe' :
                        image.category === 'musculacao' ? '🏋️ Musculação' :
                          image.category === 'equipamentos' ? '⚙️ Equipamentos' : '🎯 Academia'}
                </span>
              </div>
            </div>
          ))}
        </div>        {/* CTA below gallery - Better mobile spacing */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center animate-fade-in px-4">
          <p className="text-base sm:text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-bold">
            💡 Quer conhecer pessoalmente? <span className="text-primary">Agende uma visita!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;