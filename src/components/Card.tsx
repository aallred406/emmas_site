import { LazyLoadImage } from "react-lazy-load-image-component";

type CardProps = {
  imageSrc?: string;
  title?: string;
};

export const Card = ({ imageSrc, title }: CardProps) => {
  return (
    <div>
      {imageSrc && (
        <LazyLoadImage
          src={imageSrc}
          alt={title}
          effect="blur"
          className="w-full h-auto"
        />
      )}
      {title && <p className="text-md font-bodoni text-gray-600">{title}</p>}
    </div>
  );
};
