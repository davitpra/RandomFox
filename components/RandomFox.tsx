// RandomFox.tsx
type Props = {
    image: string;
    alt: string;
    // another prop
  };

// las props son como un objeto tipado
export function RandomFox({ image, alt }: Props): JSX.Element {

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