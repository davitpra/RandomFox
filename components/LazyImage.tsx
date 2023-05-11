import {useRef, useEffect, useState} from 'react'
/* Importamos el tipo de dato que nos aparece cuando hacemos hover cualquiera
de los eventos de image (como aprendimos antes) */
import type { ImgHTMLAttributes } from "react"

// Creamos dos nuevos tipos de datos
type LazyImageProps = { src: string }
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>

// Los sumamos, haciendo que estos sean un solo tipo de dato
type Props = LazyImageProps & ImageNativeTypes

//img props se convierte en un objeto con todas las propiedades de img
export function LazyImage ({ src,...imgProps }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null); 
  const [fox, setFox] = useState<string> (
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFox(src);
        }
      });
    });
    if (node.current) {
      observer.observe(node.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [src]);
  
//  todas las propiedades que recibe un img soportan automática e implícitamente 
  return (
    
    <img
      ref = {node}
      src={fox}
      className="w-80 h-auto rounded-lg bg-gray-300"
      //le pasamos todas la props
      {...imgProps}
    />
  );
}
