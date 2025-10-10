import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialJoao from "@/assets/testimonial-joao.jpg";
import testimonialAna from "@/assets/testimonial-ana.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João S.",
      age: 46,
      location: "Bairro Centro",
      image: testimonialJoao,
      quote: "Perdi 8kg em 3 meses e ganhei outra disposição. O acompanhamento aqui é diferente.",
    },
    {
      name: "Ana P.",
      age: 28,
      location: "Bairro Jardim",
      image: testimonialAna,
      quote: "A equipe me acolheu desde o primeiro dia. Em 6 meses conquistei a confiança que me faltava. Vale cada dia.",
    },
  ];

  return (
<section class="depoimentos">
  <h2>Quem Treina na Full Force Transforma Resultados</h2>
  
  <!-- Stats visuais do Site A -->
  <div class="stats-depoimentos">
    <div class="stat">
      <span class="numero">4.9</span>
      <span class="label">⭐ Avaliação média</span>
    </div>
    <div class="stat">
      <span class="numero">700+</span>
      <span class="label">👥 Alunos ativos</span>
    </div>
    <div class="stat">
      <span class="numero">96.5%</span>
      <span class="label">😊 Taxa de satisfação</span>
    </div>
  </div>

  <div class="cards-depoimentos">
    <div class="card-depoimento">
      <div class="estrelas">⭐⭐⭐⭐⭐</div>
      <p>"Perdi 15kg em 6 meses! A equipe da Full Force me acompanhou de perto todos os dias."</p>
      <div class="autor">
        <img src="joao.webp" alt="João">
        <div>
          <strong>João Silva</strong>
          <span>Aluno há 8 meses</span>
        </div>
      </div>
    </div>

    <div class="card-depoimento">
      <div class="estrelas">⭐⭐⭐⭐⭐</div>
      <p>"Melhor academia de Matupá! Professores atenciosos e equipamentos sempre novos."</p>
      <div class="autor">
        <img src="ana.webp" alt="Ana">
        <div>
          <strong>Ana Paula</strong>
          <span>Aluna há 1 ano</span>
        </div>
      </div>
    </div>

    <!-- 3º depoimento do Site A -->
    <div class="card-depoimento">
      <div class="estrelas">⭐⭐⭐⭐⭐</div>
      <p>"Finalmente uma academia que conhece meus objetivos e me ajuda a alcançá-los. Vale cada centavo!"</p>
      <div class="autor">
        <img src="carlos.webp" alt="Carlos">
        <div>
          <strong>Carlos Eduardo</strong>
          <span>Aluno há 5 meses</span>
        </div>
      </div>
    </div>
      <div class="beneficio">
  <div class="icone">🎯</div>
  <h3>Acompanhamento Personalizado</h3>
  <p>Professores que conhecem seu nome, seus objetivos e acompanham sua evolução de perto.</p>
</div>
  </div>
</section>
  );
};

export default Testimonials;
