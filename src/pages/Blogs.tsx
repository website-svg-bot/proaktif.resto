import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Wing Frenzy: Indulging in the Savory Delights of Chicken Wings",
    date: "28 January 2026",
    category: "Blogs",
    image: "src/assets/blog1.jpg", // Sesuai urutan gambar 1
    excerpt:
      "Fried chicken is a beloved dish that has found its way into hearts and homes around the world. Whether it's served at a family dinner, a quick snack, or as the centerpiece of a celebratory meal...",
    content:
      "Full content about Wing Frenzy... Fried chicken is a beloved dish that has found its way into hearts and homes around the world. Whether it's served at a family dinner, a quick snack, or as the centerpiece of a celebratory meal, the golden, crispy goodness of fried chicken is hard to resist.",
  },
  {
    id: 2,
    title: "Sesame Sensations: Unveiling the Delicious World of Chicken Sesame",
    date: "29 January 2026",
    category: "Blogs",
    image: "src/assets/blog2.jpg", // Sesuai urutan gambar 2
    excerpt:
      "Fried chicken is a beloved dish that has found its way into hearts and homes around the world. Whether it's served at a family dinner, a quick snack, or as the centerpiece of a celebratory meal...",
    content:
      "Full content about Sesame Sensations... Unveiling the delicious world of chicken sesame with its unique blend of flavors and textures.",
  },
  {
    id: 3,
    title:
      "Popcorn Pleasures: Exploring the Crispy Delights of Chicken Popcorn",
    date: "30 January 2026",
    category: "Blogs",
    image: "src/assets/blog3.jpg", // Sesuai urutan gambar 3
    excerpt:
      "Fried chicken is a beloved dish that has found its way into hearts and homes around the world. Whether it's served at a family dinner, a quick snack, or as the centerpiece of a celebratory meal...",
    content:
      "Full content about Chicken Popcorn... Exploring the bite-sized crispy delights that everyone loves.",
  },
  {
    id: 4,
    title:
      "Crispy Delights: Unveiling the Irresistible World of Tasty Fried Chicken",
    date: " 2 February 2026",
    category: "Blogs",
    image: "src/assets/blog4.jpg", // Sesuai urutan gambar 4
    excerpt:
      "Fried chicken is a beloved dish that has found its way into hearts and homes around the world. Whether it's served at a family dinner, a quick snack, or as the centerpiece of a celebratory meal...",
    content:
      "Full content about Tasty Fried Chicken... Detailed look into what makes our fried chicken so irresistible.",
  },
];

export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNextPost = () => {
    if (!selectedPost) return;
    const currentIndex = blogPosts.findIndex(
      (post) => post.id === selectedPost.id,
    );
    const nextIndex = (currentIndex + 1) % blogPosts.length;
    setSelectedPost(blogPosts[nextIndex]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-12 md:py-20 font-sans min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        {selectedPost ? (
          /* =========================================
             TAMPILAN DETAIL BLOG (Sesuai Konsep image_2c05a1.jpg)
             ========================================= */
          <div className="animate-fadeIn max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={18} /> Back to Blogs
            </button>

            <div className="w-full h-64 md:h-[450px] mb-8 overflow-hidden rounded-xl bg-gray-100 shadow-sm">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedPost.title}
            </h1>

            <div className="flex items-center gap-2 text-red-600 text-sm font-medium mb-8">
              <span>{selectedPost.category}</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">{selectedPost.date}</span>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-12 text-justify">
              {selectedPost.content}
            </p>

            <hr className="border-gray-100 mb-8" />

            <div className="flex justify-end">
              <button
                onClick={handleNextPost}
                className="text-blue-500 font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
              >
                Next Post <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          /* =========================================
             TAMPILAN LIST BLOG (Sesuai image_2c7a42.png)
             ========================================= */
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 border-b border-gray-100 pb-4">
              Blogs
            </h2>

            <div className="space-y-12">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col md:flex-row gap-8 items-start"
                >
                  {/* Thumbnail */}
                  <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 flex-shrink-0 shadow-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => setSelectedPost(post)}
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-2/3">
                    <h3
                      onClick={() => setSelectedPost(post)}
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors cursor-pointer leading-snug"
                    >
                      {post.title}
                    </h3>

                    <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
                      <span>{post.category}</span>
                      <span className="text-gray-300">/</span>
                      <span className="text-gray-400">{post.date}</span>
                    </div>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-sm font-bold text-gray-900 border-b-2 border-transparent hover:border-red-600 hover:text-red-600 transition-all italic"
                    >
                      Read More »
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
