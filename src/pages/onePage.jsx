import { useEffect, useState } from "react";

const BlogDetailPage = () => {
  // Mock blog post data - in a real app, you would fetch this based on ID from URL
  const [post, setPost] = useState({
    id: 1,
    title:
      "Full-Stack JavaScript Geliştirme: MERN Stack ile Modern Web Uygulamaları",
    category: "JavaScript",
    date: "1 Mayıs 2025",
    author: "Habil Yusuf Ayhan",
    authorRole: "Computer Engineer",
    readTime: "8 min read",
    image: "https://placehold.co/1200x600",
    authorImage: "https://placehold.co/100x100",
    content: [
      {
        type: "paragraph",
        text: "Modern web geliştirme dünyasında, MERN stack (MongoDB, Express.js, React ve Node.js) son yıllarda popülerliğini artıran güçlü bir teknoloji yığınıdır. Bu stack, geliştiricilere frontend'den backend'e kadar tüm uygulama katmanlarında JavaScript kullanma imkanı sunar, bu da geliştirme sürecini önemli ölçüde hızlandırır ve kolaylaştırır.",
      },
      {
        type: "heading",
        text: "MERN Stack Nedir?",
      },
      {
        type: "paragraph",
        text: "MERN stack, dört temel teknolojiden oluşan bir full-stack web geliştirme çerçevesidir:",
      },
      {
        type: "list",
        items: [
          "<strong>MongoDB</strong>: Doküman tabanlı NoSQL veritabanı, JSON benzeri belgeleri esnek şemalarla saklar.",
          "<strong>Express.js</strong>: Node.js üzerinde çalışan minimalist web uygulama çerçevesi, HTTP isteklerini yönetmeyi kolaylaştırır.",
          "<strong>React</strong>: Facebook tarafından geliştirilen, bileşen tabanlı kullanıcı arayüzü kütüphanesi.",
          "<strong>Node.js</strong>: JavaScript kodunu sunucu tarafında çalıştırmaya olanak tanıyan bir JavaScript çalışma zamanı ortamı.",
        ],
      },
      {
        type: "heading",
        text: "MERN Stack Avantajları",
      },
      {
        type: "paragraph",
        text: "MERN stack, web geliştiricileri için birçok avantaj sunar:",
      },
      {
        type: "list",
        items: [
          "<strong>Tek Dil Yaklaşımı</strong>: Frontend'den backend'e, veritabanı sorgularına kadar her yerde JavaScript kullanabilirsiniz.",
          "<strong>JSON Veri Akışı</strong>: MongoDB'den React'e kadar tüm katmanlarda veri JSON formatında akarak dönüşüm ihtiyacını ortadan kaldırır.",
          "<strong>Bileşen Tabanlı Mimari</strong>: React'in bileşen yaklaşımı, yeniden kullanılabilir UI parçaları oluşturmayı sağlar.",
          "<strong>Yüksek Performans</strong>: Node.js'in non-blocking I/O modeli ve React'in Virtual DOM optimizasyonu hızlı uygulamalar geliştirmeyi mümkün kılar.",
          "<strong>Açık Kaynak Ekosistemi</strong>: Geniş topluluk desteği ve zengin paket ekosistemi sayesinde birçok hazır çözüm bulunur.",
        ],
      },
      {
        type: "image",
        url: "https://placehold.co/1000x500",
        alt: "MERN Stack Architecture",
        caption:
          "MERN Stack Mimarisi: Veritabanından kullanıcı arayüzüne veri akışı",
      },
      {
        type: "heading",
        text: "Bir MERN Stack Projesine Başlama",
      },
      {
        type: "paragraph",
        text: "MERN stack projesi oluşturmak için temel adımları inceleyelim. İlk olarak, gerekli araçları kurmalı ve proje yapınızı oluşturmalısınız.",
      },
      {
        type: "paragraph",
        text: "Bu temel yapılandırmalarla MERN stack projenize başlayabilir ve üzerine daha karmaşık özellikler inşa edebilirsiniz. İlerleyen blog yazılarımda, kimlik doğrulama, dosya yükleme ve dağıtım gibi daha ileri düzey konuları ele alacağım.",
      },
      {
        type: "heading",
        text: "Sonuç",
      },
      {
        type: "paragraph",
        text: "MERN stack, modern web uygulamaları geliştirmek için güçlü ve esnek bir çözüm sunar. JavaScript ekosisteminin gücünü kullanarak, hem frontend hem de backend tarafında tutarlı bir geliştirme deneyimi yaşarsınız. Bu teknoloji yığını öğrenmek, freelancer olarak çalışmak veya bir şirkette iş bulmak için değerli bir beceri seti oluşturur.",
      },
      {
        type: "paragraph",
        text: "Sorularınız veya yorumlarınız varsa, aşağıda belirtebilirsiniz. Bir sonraki yazıda MERN stack projenize kimlik doğrulama eklemek üzerine odaklanacağız.",
      },
    ],
    relatedPosts: [
      {
        id: 2,
        title: "Node.js ve Express ile RESTful API Geliştirme",
        category: "Backend",
        image: "https://placehold.co/400x250",
      },
      {
        id: 3,
        title: "React Hooks ile Modern Web Uygulamaları Geliştirme",
        category: "React",
        image: "https://placehold.co/400x250",
      },
      {
        id: 4,
        title: "MongoDB ve Mongoose ile Veritabanı İşlemleri",
        category: "Database",
        image: "https://placehold.co/400x250",
      },
    ],
    tags: [
      "JavaScript",
      "MERN Stack",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Web Development",
    ],
  });

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Mehmet Yılmaz",
      authorImage: "https://placehold.co/50x50",
      date: "2 Mayıs 2025",
      content:
        "Harika bir yazı olmuş, özellikle MERN stack mimarisini açıklarken kullandığınız görsel çok yararlı.",
      likes: 5,
    },
    {
      id: 2,
      author: "Ayşe Demir",
      authorImage: "https://placehold.co/50x50",
      date: "3 Mayıs 2025",
      content:
        "Ben yeni başlayan biri olarak çok faydalandım. Acaba MERN stack öğrenmek için önerebileceğiniz kaynaklar var mı?",
      likes: 3,
    },
  ]);

  const [newComment, setNewComment] = useState("");

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

  const handleCommentSubmit = (e) => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: comments.length + 1,
      author: "Ziyaretçi",
      authorImage: "https://placehold.co/50x50",
      date: new Date().toLocaleDateString("tr-TR"),
      content: newComment,
      likes: 0,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 pt-12 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 py-16 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-800 text-sm">
                {post.date} • {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md overflow-hidden">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-gray-800 text-sm">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300">
            <div className="relative rounded-tr-xl rounded-bl-xl rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-yellow-300 opacity-20"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Blog Content */}
          <div className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl p-6 md:p-10 shadow-lg mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-400">
            <div className="prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="text-gray-700 mb-6">
                      {block.text}
                    </p>
                  );
                } else if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                    >
                      {block.text}
                    </h2>
                  );
                } else if (block.type === "list") {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-700"
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></li>
                      ))}
                    </ul>
                  );
                } else if (block.type === "image") {
                  return (
                    <figure key={index} className="my-8">
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                          src={block.url}
                          alt={block.alt}
                          className="w-full h-auto"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-center text-gray-500 mt-2 text-sm">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl p-6 shadow-lg mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-500">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-16 h-16 rounded-full bg-yellow-300 p-1 shadow-md overflow-hidden">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                <p className="text-gray-500 mb-4">{post.authorRole}</p>
                <p className="text-gray-700 mb-4">
                  Web geliştirme konusunda 5+ yıl deneyime sahip bir bilgisayar
                  mühendisi. Frontend ve backend teknolojileri hakkında blog
                  yazıları yazıyor ve açık kaynak projelere katkıda bulunuyorum.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <span className="sr-only">Twitter</span>T
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <span className="sr-only">GitHub</span>G
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>L
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl p-6 md:p-10 shadow-lg mb-12 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-600">
            <h3 className="text-2xl font-bold mb-6">
              Yorumlar ({comments.length})
            </h3>

            {/* Comment Input */}
            <div className="mb-10">
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  rows="4"
                  placeholder="Yorumunuzu yazın..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
              </div>
              <button
                onClick={handleCommentSubmit}
                className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Yorum Gönder
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex gap-4 pb-6 border-b border-gray-100 last:border-0"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={comment.authorImage}
                        alt={comment.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-bold">{comment.author}</h4>
                        <p className="text-gray-500 text-sm">{comment.date}</p>
                      </div>
                      <button className="text-gray-500 hover:text-yellow-500 transition-colors">
                        <span className="mr-1">♥</span> {comment.likes}
                      </button>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-700">
            <h3 className="text-2xl font-bold mb-6">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-900 font-medium hover:text-yellow-500 transition-colors"
                    >
                      Okumaya Devam Et
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-800">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-tr-xl rounded-bl-xl rounded-tl-3xl rounded-br-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Yeni Yazılardan Haberdar Olun
                </h3>
                <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
                  Web geliştirme, programlama ipuçları ve yeni teknolojiler
                  hakkında haftalık güncellemeler alın. Spam yok, istediğiniz
                  zaman abonelikten çıkabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    className="flex-grow px-4 py-3 rounded-lg border-2 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
