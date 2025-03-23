import React, { useEffect, useState } from 'react';

const ImagePreloader = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map(imageUrl => {
        if (imageUrl && !loadedImages[imageUrl]) {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages(prev => ({
                ...prev,
                [imageUrl]: true
              }));
              resolve(imageUrl);
            };
            img.onerror = () => reject(imageUrl);
            img.src = imageUrl;
          });
        }
        return Promise.resolve(imageUrl);
      });

      // 使用Promise.allSettled确保即使某些图片加载失败也不会影响其他图片
      Promise.allSettled(imagePromises).then(results => {
        // 可以在这里添加加载完成的回调逻辑
      });
    };

    if (images && images.length > 0) {
      preloadImages();
    }
  }, [images, loadedImages]);

  return null;
};

export default ImagePreloader;