type CardProps = {
  imageSrc?: string;
  title?: string;
};

export const Card = ({ imageSrc, title }: CardProps) => {
  return (
    <div>
      {imageSrc && (
        <img
          src={imageSrc}
          loading="lazy"
          alt={title}
          className="w-full h-auto"
        />
      )}
      {title && <p className="text-md font-bodoni text-gray-600">{title}</p>}
    </div>
  );
};
