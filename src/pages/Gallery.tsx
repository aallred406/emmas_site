import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FilterButton } from "../components/FilterButton";

// Sample gallery data - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: "/images/emma.JPG",
    alt: "Emma Portrait",
    category: "families",
    width: 400,
    height: 600,
  },
  {
    id: 2,
    src: "/images/kaylee.jpg",
    alt: "Kaylee Portrait",
    category: "families",
    width: 400,
    height: 500,
  },
  // Add more sample images for demonstration
  {
    id: 6,
    src: "/images/emma.JPG",
    alt: "Emma Wedding",
    category: "weddings",
    width: 400,
    height: 700,
  },
  {
    id: 7,
    src: "/images/kaylee.jpg",
    alt: "Engagement Photo",
    category: "engagements",
    width: 400,
    height: 450,
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "portraits", name: "Portraits" },
  { id: "srs-grad", name: "Seniors & Graduation" },
  { id: "engagements", name: "Engagements" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              category={category}
              onClick={() => setActiveCategory(category.id)}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-6">
          {filteredImages.map((image, i) => (
            // <div
            //   key={i}
            //   className="break-inside-avoid bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            //   onClick={() => setSelectedImage(image)}
            // >
            <LazyLoadImage
              key={i}
              src={image.src}
              alt={image.alt}
              effect="blur"
              className="w-full h-auto rounded-sm object-cover"
              placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3C/svg%3E"
            />
            // </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              <LazyLoadImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-white text-lg">{selectedImage.alt}</p>
                <p className="text-gray-300 text-sm capitalize">
                  {
                    categories.find((cat) => cat.id === selectedImage.category)
                      ?.name
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No images found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
