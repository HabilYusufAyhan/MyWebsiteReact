import { useEffect, useState } from "react";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "React Hooks ile Modern Web Uygulamaları Geliştirme",
      summary:
        "React Hooks kullanarak fonksiyonel komponentlerle nasıl daha temiz ve verimli kod yazabileceğinizi öğrenin.",
      date: "28 Nisan 2025",
      category: "React",
      image: "/api/placeholder/800/500",
      author: "Habil Yusuf Ayhan",
    },
    {
      id: 2,
      title: "Node.js ve Express ile RESTful API Geliştirme",
      summary:
        "Backend geliştirme sürecinizi hızlandıracak Node.js ve Express.js ipuçları ve en iyi uygulamalar.",
      date: "22 Nisan 2025",
      category: "Backend",
      image: "/api/placeholder/800/500",
      author: "Habil Yusuf Ayhan",
    },
    {
      id: 3,
      title: "Tailwind CSS ile Hızlı UI Geliştirme",
      summary:
        "Tailwind CSS kullanarak nasıl hızlı ve tutarlı kullanıcı arayüzleri oluşturabileceğinizi keşfedin.",
      date: "15 Nisan 2025",
      category: "CSS",
      image: "/api/placeholder/800/500",
      author: "Habil Yusuf Ayhan",
    },
    {
      id: 4,
      title: "MongoDB ve Mongoose ile Veritabanı İşlemleri",
      summary:
        "NoSQL veritabanı MongoDB ile çalışmanın temel prensipleri ve Mongoose ORM kullanımı.",
      date: "8 Nisan 2025",
      category: "Database",
      image: "/api/placeholder/800/500",
      author: "Habil Yusuf Ayhan",
    },
  ]);

  // Animation for elements to fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full py-20 px-4 bg-gray-50 bg-gradient-to-br from-orange-50 to-yellow-100 overflow-x-hidden">
      <div className="container mx-auto mt-20 z-50">
        {/* Section Title */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold relative z-10 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
            My Blog
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
          <div className="flex flex-col md:flex-row gap-8 bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-yellow-300 opacity-20"></div>
              <img
                src="/api/placeholder/800/500"
                alt="Featured post"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                  JavaScript
                </span>
                <span className="text-gray-500 text-sm">1 Mayıs 2025</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Full-Stack JavaScript Geliştirme: MERN Stack ile Modern Web
                Uygulamaları
              </h3>
              <p className="text-gray-700 mb-6">
                Modern web uygulaması geliştirme sürecini hızlandırmak ve
                optimize etmek için MongoDB, Express.js, React ve Node.js
                teknolojilerini nasıl bir arada kullanabileceğinizi öğrenin. Bu
                kapsamlı rehber, bir MERN stack projesinin yapılandırılmasından
                dağıtımına kadar tüm aşamaları ele alıyor.
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/api/placeholder/100/100"
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Habil Yusuf Ayhan</p>
                  <p className="text-gray-500 text-sm">Computer Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-${
                300 + index * 100
              }`}
            >
              <div className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="/api/placeholder/100/100"
                        alt="Author"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{post.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-700">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tr-xl rounded-bl-xl rounded-tl-3xl rounded-br-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-yellow-500 rounded-full opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Subscribe to My Newsletter
              </h3>
              <p className="text-gray-800 mb-6 max-w-2xl">
                Get weekly updates about web development, programming tips, and
                new technologies. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-20 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-800">
          <h3 className="text-2xl font-bold mb-6">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Frontend",
              "Backend",
              "CSS",
              "HTML",
              "Database",
              "API",
              "UI/UX",
            ].map((category, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
