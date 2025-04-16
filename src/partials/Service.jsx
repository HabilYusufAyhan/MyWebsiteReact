const Service = ({ service, index }) => {
  return (
    <div
      key={index}
      className="flex justify-between flex-col bg-white rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-on-scroll opacity-0 translate-y-12"
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl bg-yellow-100 p-3 mr-4 group-hover:bg-yellow-200 transition-colors duration-300">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>

        <p className="text-gray-600 mb-6">{service.description}</p>

        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm">
              <svg
                className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Service;
