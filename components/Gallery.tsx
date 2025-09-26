
import React from 'react';

const photos = [
  'https://picsum.photos/seed/gallery1/600/800',
  'https://picsum.photos/seed/gallery2/800/600',
  'https://picsum.photos/seed/gallery3/600/800',
  'https://picsum.photos/seed/gallery4/800/600',
  'https://picsum.photos/seed/gallery5/600/800',
  'https://picsum.photos/seed/gallery6/800/600',
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4" data-aos="fade-up">Khoảnh Khắc Của Chúng Tôi</h2>
        <p className="max-w-2xl mx-auto text-lg text-text-main mb-12" data-aos="fade-up" data-aos-delay="100">
          Cùng nhìn lại những kỷ niệm đẹp trên hành trình tình yêu của chúng tôi.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay={index * 100}>
              <img 
                src={photo} 
                alt={`Couple photo ${index + 1}`} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
