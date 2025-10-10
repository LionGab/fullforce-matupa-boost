import gymCardio from "@/assets/gym-cardio.jpg";
import gymWeights from "@/assets/gym-weights.jpg";
import gymFloor from "@/assets/gym-floor.jpg";
import gymDumbbells from "@/assets/gym-dumbbells.jpg";
import gymKids from "@/assets/gym-kids.jpg";
import gymReception from "@/assets/gym-reception.jpg";

const images = [
  {
    src: gymCardio,
    alt: "Área de cardio com esteiras e vista panorâmica",
    title: "Cardio Premium",
  },
  {
    src: gymWeights,
    alt: "Área de musculação com equipamentos modernos",
    title: "Musculação Completa",
  },
  {
    src: gymFloor,
    alt: "Piso amplo da academia com iluminação moderna",
    title: "Espaço Amplo",
  },
  {
    src: gymDumbbells,
    alt: "Área de pesos livres e halteres",
    title: "Pesos Livres",
  },
  {
    src: gymKids,
    alt: "Espaço Kids Full Force colorido e divertido",
    title: "Espaço Kids",
  },
  {
    src: gymReception,
    alt: "Recepção moderna da Full Force Academia",
    title: "Recepção",
  },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Conheça Nossa <span className="text-gradient">Estrutura</span>
          </h2>
          <p className="text-xl text-gray-300">
            Equipamentos de ponta, ambiente climatizado e espaço amplo. 
            Veja por que somos a academia mais moderna de Matupá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-black"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Quer conhecer pessoalmente? Agende uma visita!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;