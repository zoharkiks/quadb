import { useState, useEffect } from 'react';
import { extractColors } from 'extract-colors/lib/extract-colors.mjs';

const useExtractColors = (src) => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);


  const options = {
    pixels: 64000,
    distance: 0.22,
    colorValidator: (red, green, blue, alpha = 255) => alpha > 250,
    saturationDistance: 0.2,
    lightnessDistance: 0.2,
    hueDistance: 0.083333333,
    crossOrigin:'anonymous'
  }

  
  useEffect(() => {
    if (src) {
      extractColors(src,options)
        .then((extractedColors) => {
          setColors(extractedColors);
        })
        .catch((error) => {
          console.error('Error extracting colors:', error);
          setError(error);
        });
    }
  }, [src]);

  return { colors, error };
};

export default useExtractColors;
