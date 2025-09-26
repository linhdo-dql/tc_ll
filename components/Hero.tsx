import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (weddingDate: Date): TimeLeft | null => {
    const difference = +weddingDate - +new Date();
    let timeLeft: TimeLeft | null = null;

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};

const Hero: React.FC = () => {
  // Set the wedding date to December 28, 2024
  const weddingDate = new Date('2024-12-28T00:00:00');
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const formatTimeUnit = (unit: keyof TimeLeft) => {
    if (!timeLeft) return '00';
    return String(timeLeft[unit]).padStart(2, '0');
  };

  return (
    <section 
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center p-4">
        <h2 className="font-sans text-xl md:text-2xl tracking-widest uppercase" data-aos="fade-down" data-aos-delay="200">Trân trọng kính mời</h2>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl my-4" data-aos="fade-up">Huy & Linh</h1>
        <div className="w-24 h-px bg-gold mx-auto my-6" data-aos="zoom-in" data-aos-delay="400"></div>
        <p className="font-sans text-lg md:text-xl" data-aos="fade-up" data-aos-delay="600">Lễ Thành Hôn</p>
        <p className="font-sans text-2xl md:text-3xl mt-2" data-aos="fade-up" data-aos-delay="800">28.12.2024</p>
        
        {timeLeft ? (
             <div className="mt-10" data-aos="fade-up" data-aos-delay="1000">
                <div className="flex justify-center items-center space-x-4 md:space-x-8">
                    <div className="text-center">
                        <p className="font-serif text-4xl md:text-5xl">{formatTimeUnit('days')}</p>
                        <p className="font-sans text-xs md:text-sm uppercase tracking-widest">Ngày</p>
                    </div>
                     <div className="font-serif text-4xl md:text-5xl">:</div>
                    <div className="text-center">
                        <p className="font-serif text-4xl md:text-5xl">{formatTimeUnit('hours')}</p>
                        <p className="font-sans text-xs md:text-sm uppercase tracking-widest">Giờ</p>
                    </div>
                     <div className="font-serif text-4xl md:text-5xl">:</div>
                    <div className="text-center">
                        <p className="font-serif text-4xl md:text-5xl">{formatTimeUnit('minutes')}</p>
                        <p className="font-sans text-xs md:text-sm uppercase tracking-widest">Phút</p>
                    </div>
                     <div className="font-serif text-4xl md:text-5xl">:</div>
                    <div className="text-center">
                        <p className="font-serif text-4xl md:text-5xl">{formatTimeUnit('seconds')}</p>
                        <p className="font-sans text-xs md:text-sm uppercase tracking-widest">Giây</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="mt-10 font-serif text-2xl" data-aos="fade-up" data-aos-delay="1000">
                Ngày trọng đại đã đến!
            </div>
        )}
      </div>
    </section>
  );
};

export default Hero;