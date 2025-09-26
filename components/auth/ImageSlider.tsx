import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1629233644783-65487a385a4a?q=80&w=1887&auto=format&fit=crop',
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Medical slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;