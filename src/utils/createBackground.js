export const createBackground = (element, dominantColor, dominantColor2, imgSrc, fallbackColor = 'rgba(0, 0, 0, 0.75)') => {
    if (dominantColor && imgSrc ) {
      // Set the background style using the dominant color and image source
      element.style.backgroundImage = `
        linear-gradient(
          to left, 
        rgba(0, 0, 0, 0) 0%, 
          ${dominantColor} 60%, 
          ${dominantColor} 80%, 
          ${dominantColor2} 100%
        ),
        url('${imgSrc}')
      `;
    } else if (dominantColor) {
      // Set the background style using the dominant color without an image
      element.style.backgroundImage = `
        linear-gradient(
          to left, 
          ${dominantColor} 45%, 
          ${dominantColor2} 100%
        )
      `;
    } else {
      // Set a fallback solid color if no dominantColor is provided
      element.style.background = fallbackColor;
    }
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    element.style.backgroundRepeat = 'no-repeat';
  };