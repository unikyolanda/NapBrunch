import React, { useState, useEffect } from 'react';

const ScrollDiv = ({ threshold, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const checkVisibility = () => {
      const position = window.scrollY;
      if (position > lastScrollTop) {
        setIsVisible(position > threshold);
      } else {
        setIsVisible(position > threshold);
      }
      setLastScrollTop(position);
    };

    window.addEventListener('scroll', checkVisibility);
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [threshold, lastScrollTop]);

  const animationClass = isVisible ? 'animate-slideUp' : 'animate-slideDown';

  const animatedContent = React.cloneElement(content, {
    className: `${animationClass} ${content.props.className || ''}`
  });

  return isVisible ? <>{animatedContent}</> : null;
};

export default ScrollDiv;
