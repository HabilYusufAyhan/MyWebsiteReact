import { useEffect } from "react";
import Service from "../partials/Service.jsx";

const MyServices = () => {
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

  // Services data
  const services = [
    {
      title: "Web Development",
      description:
        "Custom website development using modern technologies like React and Tailwind CSS. Fully responsive and optimized for performance.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      features: [
        "Responsive design for all devices",
        "Modern UI with smooth animations",
        "Performance optimization",
        "SEO-friendly structure",
      ],
    },

    {
      title: "UI/UX Design",
      description:
        "User-centered design approach creating intuitive interfaces that balance aesthetics and functionality for the best user experience.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      features: [
        "User-centered design approach",
        "Interactive prototypes",
        "Visual design systems",
        "Usability testing",
      ],
    },
    {
      title: "API Development",
      description:
        "Scalable, secure RESTful API endpoints with comprehensive documentation and testing for your applications.",
      icon: (
        <svg
          className="w-12 h-12 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "RESTful APIs",
        "Authentication & authorization",
        "Data validation & error handling",
        "Comprehensive documentation",
      ],
    },
  ];

  return (
    <div
      id="my-services"
      className="min-h-screen w-full  py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold relative z-10 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            My Services
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            I offer a wide range of development and design services tailored to
            your specific needs and project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service service={service} index={index} key={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-600">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to start your project?
            </h3>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. Contact me today to
              discuss your project requirements and how I can help you achieve
              your goals.
            </p>
            <a
              href="#contact-me"
              className="inline-block bg-white text-yellow-500 hover:text-yellow-600 font-bold px-8 py-3 rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
