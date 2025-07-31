type FilterButtonProps = {
  category: {
    id: string;
    name: string;
  };
  onClick: () => void;
  activeCategory: string;
};

export const FilterButton = ({
  category,
  onClick,
  activeCategory,
}: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded font-medium transition-all duration-300 ${
        activeCategory === category.id
          ? "bg-gray-600 text-white focus-visible:outline-0 focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-1"
          : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus-visible:ring-1 focus-visible:ring-gray-600 focus-visible:ring-offset-1 focus:outline-0 focus-visible:bg-gray-100"
      }`}
    >
      {category.name}
    </button>
  );
};
