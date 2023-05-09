// RandomFox.tsx
type Props = {
    image: string;
    alt: string;
    // another prop
  };

// las props son como un objeto tipado
export function RandomFox({ image, alt }: Props): JSX.Element {
// Lo que hicimos fue desestructurar el objeto props para 
// quedarnos solo con lo que necesitamos (image y alt)

  return (
    <img
      width="320"
      height="auto"
      src={image}
      alt={alt}
      className="mx-auto rounded-md bg-gray-300"
    />
  );
}