import { useState, useEffect } from "react";
import NavbarMenu from "../partials/NavbarMenu";
import NavbarMenuMobile from "../partials/NavbarMenuMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation for elements to fade in on load
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100");
        el.classList.remove("opacity-0", "translate-y-8");
      }, 300 * index);
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col items-center">
          {/* Logo - Made Larger */}
          <div className="relative mb-12 animate-on-load opacity-0 translate-y-8 transition-all duration-700">
            <div className="absolute -inset-4 bg-yellow-300 rounded-full opacity-30 blur-lg animate-pulse"></div>
            <div className="relative w-64 h-64 animate-float-delayed md:w-80 md:h-80 rounded-full bg-white shadow-2xl border-4 border-white overflow-hidden">
              <img
                className="w-full h-full object-cover "
                src="/logo.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center max-w-xl animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Web Developer
            </h1>
            <p className="text-lg text-gray-700">
              I transform ideas into elegant digital experiences
            </p>
          </div>

          {/* Navigation - Embedded in header */}
          <nav className="w-full max-w-3xl mt-12 animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <ul className="flex flex-wrap justify-center gap-4">
              {["Who am I", "My Projects", "My Services", "Contact Me"].map(
                (item, index) => (
                  <NavbarMenu item={item} index={index} key={index} />
                )
              )}
            </ul>
          </nav>

          {/* Background decorative elements with animations */}
          <div className="fixed top-1/4 right-8 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
          <div className="fixed bottom-1/4 left-12 w-12 h-12 bg-orange-300 rounded-full opacity-30 animate-float-delayed"></div>
          <div className="fixed bottom-1/3 right-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-float-slow"></div>
          <div className="fixed top-1/3 left-1/4 w-10 h-10 bg-orange-200 rounded-full opacity-30 animate-ping-slow"></div>
          <div className="fixed bottom-0 left-0 w-full h-1/3 bg-orange-100 opacity-30 -z-10"></div>
          <div className="fixed -bottom-16 -right-16 w-64 h-64 rounded-full bg-yellow-300 opacity-20 blur-xl animate-pulse-slow"></div>
          <div className="fixed -top-8 -left-8 w-40 h-40 rounded-full bg-yellow-300 opacity-20 blur-lg animate-pulse"></div>
        </div>
      </div>

      {/* Mobile menu button - only visible on small screens */}
      <button
        className="md:hidden fixed top-4 right-4 bg-yellow-400 p-2 rounded-full shadow-md z-50 hover:bg-yellow-500 transition-colors duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${
            isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Mobile menu - only visible when toggled */}
      <div
        className={`fixed inset-0 bg-yellow-50 z-40 flex items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {["Who am I", "My Projects", "My Services", "Contact Me"].map(
            (item, index) => (
              <NavbarMenuMobile
                item={item}
                index={index}
                setIsMenuOpen={setIsMenuOpen}
              />
            )
          )}
        </ul>
      </div>

      {/* CSS Animations in style tag */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-float-delayed {
          animation: float-delayed 7s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: float-slow 8s infinite ease-in-out;
        }
        .animate-ping-slow {
          animation: ping-slow 10s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Header;
