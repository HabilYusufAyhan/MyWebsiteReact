import { useEffect } from "react";

const Whoami = () => {
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
    <div id="who-am-i" className="min-h-screen w-full mt-20 py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold relative z-10 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100">
            Who Am I
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-100 -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <div className="w-full md:w-2/5 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-300 rounded-full opacity-20 blur-lg"></div>
              <div className="relative overflow-hidden rounded-tr-3xl rounded-bl-3xl rounded-tl-6xl rounded-br-6xl border-4 border-white shadow-xl">
                <img
                  src="/image.jpg"
                  alt="Profile"
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=Profile+Photo";
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-300 rounded-full opacity-30 animate-float-delayed"></div>
            </div>
          </div>

          {/* About Me Content */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl p-8 shadow-lg animate-on-scroll opacity-0 translate-y-12 transition-all duration-700 delay-300">
              <h3 className="text-2xl font-bold mb-4 text-black">
                Hi there! I'm Habil Yusuf Ayhan
              </h3>

              <p className="text-gray-700 mb-6">
                I started the sector as a frontend web programmer. My first goal
                was to progress on the frontend. However, when I got to know
                JavaScript and Node.js, I shifted my sector to the backend side.
                I started my backend journey by using node.js express mongodb
                structures on top of HTML CSS JavaScript.
              </p>

              <p className="text-gray-700 mb-8">
                During my internship, I gained experience in both React
                Framework and Spring Boot technologies. I wrote IOT projects
                with NodeMCU. Although I use MongoDB more as a database, I also
                have knowledge of MSSQL and MYSQL I know how to use webpack and
                write modularly My goal is to take my experience with both
                backend and frontend programming to the highest possible level
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">My Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "HTML",
                    "CSS",
                    "Git",
                    "Spring Boot",
                    "Java",
                    "MySQL",
                    "C#",
                    "JSON",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Experience - Brief Version */}
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  Experience & Education
                </h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1 w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold">Software Intern at PIA</h5>
                      <p className="text-gray-600 text-sm">
                        01.07.2024 - 28.07.2024
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1 w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold">Computer Engineer Student</h5>
                      <p className="text-gray-600 text-sm">
                        Erzincan Binali Yıldırım University, 2021 - Present
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoami;
