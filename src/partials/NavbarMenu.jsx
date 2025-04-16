const NavbarMenu = ({ item, index }) => {
  return (
    <li
      key={index}
      className="transform transition-all duration-300 hover:scale-105"
    >
      <a
        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
        className="md:block hidden bg-yellow-400 text-black font-medium px-6 py-3 rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl transition-all duration-300 shadow-md hover:shadow-xl hover:bg-yellow-500 hover:text-white relative overflow-hidden group"
      >
        <span className="relative z-10">{item}</span>
        <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-orange-400 to-yellow-500 transition-all duration-300 group-hover:h-full -z-0"></span>
      </a>
    </li>
  );
};
export default NavbarMenu;
