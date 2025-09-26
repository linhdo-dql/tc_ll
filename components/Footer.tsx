
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brown-dark text-cream/80 text-center">
      <div className="container mx-auto px-6">
        <p className="font-serif text-2xl mb-2">Huy & Linh</p>
        <p className="text-sm">Cảm ơn vì đã là một phần trong câu chuyện của chúng tôi.</p>
        <div className="w-16 h-px bg-gold mx-auto my-4"></div>
        <p className="text-sm">28.12.2024</p>
      </div>
    </footer>
  );
};

export default Footer;
