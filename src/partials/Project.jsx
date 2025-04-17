import { useEffect, useState } from "react";
import fetchGitHubRepos from "../config/FetchGithubRepos";

const Project = ({ project, index }) => {
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
  const [projectLanguage, setProjectLanguage] = useState([]);
  //languages_url
  useEffect(() => {
    const fetchData = async () => {
      setProjectLanguage(
        await fetchGitHubRepos({ url: project.languages_url })
      );
    };
    fetchData();
  }, []);

  const date = new Date(project.updated_at).toLocaleDateString("en-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      key={index}
      className={`bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg transform transition-all duration-500 animate-on-scroll opacity-0 translate-y-12`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Project Header with GitHub Theme */}
      <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gray-700 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <h3 className="font-bold truncate">{project.name}</h3>
        </div>
        <div className="flex space-x-2 text-gray-600 text-sm">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{project.forks_count}</span>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 h-12 line-clamp-2 overflow-y-auto">
          {project.description
            ? project.description
            : "No description available."}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.keys(projectLanguage)
            .slice(0, 3)
            .map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}

          {Object.keys(projectLanguage).length > 3 && (
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
              +{Object.keys(projectLanguage).length - 3} more
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{date}</span>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-3 py-1 rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl transition-all duration-300"
          >
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
