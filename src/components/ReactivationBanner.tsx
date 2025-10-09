import { X, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const ReactivationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const seen = localStorage.getItem("seenReactivationBanner");
  if (!seen) {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }
}, []);

const handleClose = () => {
  setIsVisible(false);
  localStorage.setItem("seenReactivationBanner", "true");
};


  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsVisible(false);
  };

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto z-40 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="bg-yellow-400 text-black p-3 rounded-md shadow-md max-w-[90%] mx-auto text-sm md:text-base mb-4">
  <p className="font-semibold flex items-center gap-2">
    🎁 Ex-aluno? <span className="font-normal">1 semana grátis + matrícula por nossa conta.</span>
  </p>
  <button className="mt-2 bg-black text-yellow-400 text-sm px-3 py-1 rounded-md">
    Quero minha vaga
  </button>
</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 pr-8">
              <p className="font-black text-gym-dark mb-2">Preencha para garantir sua vaga:</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Input

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
