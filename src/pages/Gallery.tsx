import { useState } from "react";

// use https://www.npmjs.com/package/react-lazy-load-image-component for lazy load gallery images

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "photography", name: "Photography" },
    { id: "digital-art", name: "Digital Art" },
    { id: "illustrations", name: "Illustrations" },
    { id: "projects", name: "Projects" },
  ];

  // Mock gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Sunset Landscape",
      category: "photography",
      description: "Beautiful sunset over mountain range",
    },
    {
      id: 2,
      title: "Abstract Composition",
      category: "digital-art",
      description: "Colorful abstract digital artwork",
    },
    {
      id: 3,
      title: "Character Design",
      category: "illustrations",
      description: "Original character illustration",
    },
    {
      id: 4,
      title: "Web App Design",
      category: "projects",
      description: "Modern web application interface",
    },
    {
      id: 5,
      title: "Street Photography",
      category: "photography",
      description: "Urban life captured in black and white",
    },
    {
      id: 6,
      title: "Digital Portrait",
      category: "digital-art",
      description: "Stylized digital portrait artwork",
    },
    {
      id: 7,
      title: "Nature Study",
      category: "illustrations",
      description: "Botanical illustration series",
    },
    {
      id: 8,
      title: "Mobile App UI",
      category: "projects",
      description: "Clean mobile application design",
    },
    {
      id: 9,
      title: "Travel Photography",
      category: "photography",
      description: "Memories from around the world",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my creative works, projects, and artistic
            expressions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-300 transition-all duration-300">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-500 group-hover:text-white mx-auto mb-2 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-500 group-hover:text-white font-medium transition-colors">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-24 h-24 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No items found
            </h3>
            <p className="text-gray-600">Try selecting a different category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Like what you see?
            </h2>
            <p className="text-gray-600 mb-6">
              I'm always working on new projects and would love to collaborate
              or discuss potential opportunities.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
