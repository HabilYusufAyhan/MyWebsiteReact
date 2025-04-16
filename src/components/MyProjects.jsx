import { useEffect, useState } from "react";
import Project from "../partials/Project";
import fetchGitHubRepos from "../config/FetchGithubRepos";

const MyProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

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
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setProjects(
        await fetchGitHubRepos({
          url: "https://api.github.com/users/HabilYusufAyhan/repos",
        })
      );
    };
    fetchData();
  }, []);
  console.log(projects);

  return (
    <div
      id="my-projects"
      className="min-h-screen w-full py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="relative mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold relative z-10 animate-on-scroll opacity-0 translate-y-12 transition-all duration-700">
            My Projects
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-yellow-400 rounded-full animate-on-scroll opacity-0 translate-y-12 transition-all duration-700"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Project project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
