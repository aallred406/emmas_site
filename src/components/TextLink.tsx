import { Link } from "react-router-dom";

type TextLinkProps = {
  to: string;
  text: string;
};

export const TextLink = ({ to, text }: TextLinkProps) => {
  const focusStyles =
    "focus-visible:rounded-sm focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-1 focus:outline-0 focus-visible:bg-gray-100";
  const hoverStyles = "hover:rounded-sm hover:text-gray-900 hover:bg-gray-100";
  return (
    <Link
      to={to}
      className={`font-bodoni text-md ${focusStyles} ${hoverStyles} text-gray-600 transition-colors underline`}
    >
      {text}
    </Link>
  );
};
