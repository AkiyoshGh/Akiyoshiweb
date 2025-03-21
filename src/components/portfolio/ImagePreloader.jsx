import React, { useEffect } from 'react';

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach(imageUrl => {
        if (imageUrl) {
          const img = new Image();
          img.src = imageUrl;
        }
      });
    };

    if (images && images.length > 0) {
      preloadImages();
    }
  }, [images]);

  return null;
};

export default ImagePreloader;