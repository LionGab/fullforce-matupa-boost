import { X, Gift } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ReactivationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 3000);
  return () => clearTimeout(timer);
}, []);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    ano: "",
  });

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would integrate with Google Sheets API or your backend
    // For now, we'll just show a success message
    console.log("Ex-aluno data:", formData);
    
    toast({
      title: "Vaga garantida! 🎉",
      description: "Nossa equipe entrará em contato em breve via WhatsApp.",
    });
    
    setIsVisible(false);
  };

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto z-40 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="bg-yellow-400 text-black p-3 sm:p-4 rounded-md shadow-md relative mx-auto text-sm sm:text-base w-full sm:max-w-3xl">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gym-dark hover:bg-gym-dark/10 rounded-full p-1 transition-smooth"
            aria-label="Fechar banner"
          >
            <X className="w-5 h-5" />
          </button>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pr-8">
              <div className="flex items-center gap-3 text-gym-dark">
                <Gift className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-black text-lg">Ex-aluno? Temos um presente para você.</p>
                  <p className="text-sm font-semibold">Volte a treinar com 1 semana grátis + matrícula por nossa conta</p>
                </div>
              </div>
              <Button
                onClick={() => setShowForm(true)}
                variant="secondary"
                className="bg-gym-dark text-white hover:bg-gym-dark/90 font-bold whitespace-nowrap"
              >
                Quero minha vaga
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pr-8">
              <p className="font-black text-gym-dark mb-2">Preencha para garantir sua vaga:</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="bg-white border-gym-dark"
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  required
                  className="bg-white border-gym-dark"
                />
                <Input
                  type="text"
                  placeholder="Ano que treinou"
                  value={formData.ano}
                  onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
                  required
                  className="bg-white border-gym-dark"
                />
              </div>
              <Button
                type="submit"
                className="bg-gym-dark text-white hover:bg-gym-dark/90 font-bold w-full sm:w-auto"
              >
                Garantir minha vaga grátis
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactivationBanner;
