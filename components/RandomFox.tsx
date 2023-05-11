import {useRef, useEffect, useState} from 'react'

// RandomFox.tsx
type Props = {image: string;alt: string;};

// las props son como un objeto tipado
export function RandomFox({ image, alt }: Props): JSX.Element {
  // creamos una referencia para Lazy Loading
  const node = useRef<HTMLImageElement>(null);
  // estado para cargar la imagen 
  const [src, setSrc] = useState(
    // imagen gris que sirve para mostrar que se esta cargando
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // creamos el observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // si se interseca carga la imagen
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    //observa el nodo
    if (node.current) {
      observer.observe(node.current);
    }
    // desconect el nodo
    return () => {
      observer.disconnect();
    };
    // cada vez que una imagen se carge.
  }, [image]);
  
  return (
    <img
      ref = {node}
      width="320"
      height="auto"
      src={image}
      alt={alt}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}