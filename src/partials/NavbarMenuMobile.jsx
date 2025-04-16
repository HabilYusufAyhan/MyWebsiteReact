const NavbarMenuMobile = ({ item, index, setIsMenuOpen }) => {
  return (
    <li
      key={index}
      className="transform transition-all duration-300 hover:scale-105"
    >
      <a
        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
        onClick={() => setIsMenuOpen(false)}
        className="text-xl font-medium hover:text-yellow-600"
      >
        {item}
      </a>
    </li>
  );
};
export default NavbarMenuMobile;
