
import React from 'react';

const CoupleInfo: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4" data-aos="fade-up">Về Chúng Tôi</h2>
        <p className="max-w-3xl mx-auto text-lg text-text-main mb-16" data-aos="fade-up" data-aos-delay="100">
          "Tình yêu không phải là nhìn chằm chằm vào nhau, mà là cùng nhau nhìn về một hướng."
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
          <div className="text-center" data-aos="fade-right" data-aos-delay="200">
            <img 
              src="https://picsum.photos/seed/groom/400/400" 
              alt="Chú rể" 
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mx-auto mb-6 border-4 border-gold shadow-lg"
            />
            <h3 className="font-serif text-3xl text-brown-dark">Minh Huy</h3>
            <p className="text-text-main mt-2">Chú Rể</p>
          </div>
          <div className="font-serif text-6xl text-gold" data-aos="fade-up" data-aos-delay="300">&amp;</div>
          <div className="text-center" data-aos="fade-left" data-aos-delay="200">
            <img 
              src="https://picsum.photos/seed/bride/400/400" 
              alt="Cô dâu" 
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover mx-auto mb-6 border-4 border-gold shadow-lg"
            />
            <h3 className="font-serif text-3xl text-brown-dark">Thảo Linh</h3>
            <p className="text-text-main mt-2">Cô Dâu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleInfo;
