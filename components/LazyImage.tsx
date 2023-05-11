import {useRef, useEffect, useState} from 'react'
import type { ImgHTMLAttributes } from "react"

type LazyImageProps = { 
  src: string
  onLazyLoad?: (img: HTMLImageElement) => void
}
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNativeTypes

export function LazyImage ({ src, onLazyLoad,...imgProps }: Props): JSX.Element {
  const node = useRef<HTMLImageElement>(null); 
  const [fox, setFox] = useState<string> (
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  // creamos el estado de carga
  const [Loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFox(src);
          if (node.current) {
            onLazyLoad && onLazyLoad(node.current)
            observer.disconnect()
          }
          // cambiamos el estado de carga
          setLoading(true)
        }
      });
    });
    if (node.current) {
      observer.observe(node.current);
    }
    return () => {
      observer.disconnect();
    };
    // se carga cada vez que cambie src, el onLazyLoad o el Loading
  }, [src, onLazyLoad,Loading]);
  
  return (
    
    <img
      ref = {node}
      src={fox}
      className="w-80 h-auto rounded-lg bg-gray-300"
      {...imgProps}
    />
  );
}
