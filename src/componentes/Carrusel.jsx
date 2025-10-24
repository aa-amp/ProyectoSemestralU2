import React, { useEffect, useRef, useState } from 'react';
import '../estilos/carrusel.css';

export default function Carrusel({ items, onBuy }) {
  const trackRef = useRef(null);
  const carruselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const getCardWidth = () => {
    const card = trackRef.current?.querySelector('.producto-card');
    if (!card) return 300;
    const style = getComputedStyle(card);
    return card.offsetWidth + (parseInt(style.marginRight) || 0);
  };

  const getMaxTranslate = () => {
    return Math.max(trackRef.current.scrollWidth - carruselRef.current.offsetWidth, 0);
  };

  const updateCarousel = () => {
    const translate = index * getCardWidth();
    trackRef.current.style.transform = `translateX(-${Math.min(translate, getMaxTranslate())}px)`;
  };

  useEffect(() => {
    updateCarousel();
  }, [index]);

  useEffect(() => {
    const handleResize = () => {
      if (index * getCardWidth() > getMaxTranslate()) {
        setIndex(Math.floor(getMaxTranslate() / getCardWidth()));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index]);

  const next = () => {
    const nextIndex = index + 1;
    if (nextIndex * getCardWidth() > getMaxTranslate() + getCardWidth()) {
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = index - 1;
    if (prevIndex < 0) {
      setIndex(trackRef.current.children.length - 1);
    } else {
      setIndex(prevIndex);
    }
  };

  return (
    <div className="carrusel" ref={carruselRef}>
      <button className="carrusel-btn prev" onClick={prev}>‹</button>
      <div className="carrusel-track" ref={trackRef}>
        {items.map(product => (
          <div key={product.id} className="producto-card">
            <img src={product.img} alt={product.title} />
            <div className="producto-card-content">
              <h3>{product.title}</h3>
              <p className="descripcion">{product.desc}</p>
              <p className="precio">{product.price}</p>
              <button className="btn-comprar" onClick={() => onBuy(product)}>Comprar</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carrusel-btn next" onClick={next}>›</button>
    </div>
  );
}