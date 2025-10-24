import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-31T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-error text-white py-3 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 animate-pulse" />
            <span className="font-bold text-sm md:text-base">INSCRIÇÕES ENCERRAM EM:</span>
          </div>

          <div className="flex gap-3">
            <div className="text-center">
              <div className="bg-black/30 px-3 py-2 rounded-lg min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{timeLeft.days}</div>
                <div className="text-xs uppercase tracking-wider">Dias</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black/30 px-3 py-2 rounded-lg min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{timeLeft.hours}</div>
                <div className="text-xs uppercase tracking-wider">Horas</div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black/30 px-3 py-2 rounded-lg min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{timeLeft.minutes}</div>
                <div className="text-xs uppercase tracking-wider">Min</div>
              </div>
            </div>

            <div className="hidden md:block text-center">
              <div className="bg-black/30 px-3 py-2 rounded-lg min-w-[60px]">
                <div className="text-2xl md:text-3xl font-black">{timeLeft.seconds}</div>
                <div className="text-xs uppercase tracking-wider">Seg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;
