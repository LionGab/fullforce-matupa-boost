import { X, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ReactivationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    ano: "",
  });

  useEffect(() => {
    const seen = localStorage.getItem("seenReactivationBanner");
    if (!seen) {
      const timer = setTimeout(() => setIsVisible(true), 6000); // aparece após 6s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("seenReactivationBanner", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Ex-aluno data:", formData);

    toast({
      title: "Vaga garantida! 🎉",
      description: "Nossa equipe entrará em contato em breve via WhatsApp.",
    });

    setIsVisible(false);
    localStorage.setItem("seenReactivationBanner", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-40 animate-fade-in">
      <div className="bg-yellow-300/95 backdrop-blur-sm text-black p-4 rounded-lg shadow-lg w-[90%] sm:w-80 relative border border-yellow-400">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gym-dark hover:bg-gym-dark/10 rounded-full p-1 transition-smooth"
          aria-label="Fechar banner"
        >
          <X className="w-5 h-5" />
        </button>

        {!showForm ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <Gift className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-black text-base leading-tight">
                  Ex-aluno? Temos um presente pra você.
                </p>
                <p className="text-sm font-semibold">
                  1 semana grátis + matrícula por nossa conta
                </p>
              </div>
            </div>
            <Button
              onClick={() => setShowForm(true)}
              variant="secondary"
              className="bg-gym-dark text-white hover:bg-gym-dark/90 font-bold text-sm py-2 mt-2"
            >
              Quero minha vaga
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 mt-2">
            <p className="font-black text-gym-dark mb-1 text-sm">
              Preencha para garantir sua vaga:
            </p>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="bg-white border-gym-dark text-sm"
              />
              <Input
                type="tel"
                placeholder="WhatsApp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                required
                className="bg-white border-gym-dark text-sm"
              />
              <Input
                type="text"
                placeholder="Ano que treinou"
                value={formData.ano}
                onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
                required
                className="bg-white border-gym-dark text-sm"
              />
            </div>
            <Button
              type="submit"
              className="bg-gym-dark text-white hover:bg-gym-dark/90 font-bold w-full text-sm py-2"
            >
              Garantir minha vaga grátis
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReactivationBanner;
