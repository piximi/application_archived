import { useState } from 'react';

function useImages() {
  const [images, setImages] = useState([]);

  return { images };
}
