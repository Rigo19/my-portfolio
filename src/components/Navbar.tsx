import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, 
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.path);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-stone-800 fixed top-0 left-0 w-full z-50 shadow-md py-4 px-8">
      <ul className="flex space-x-8 text-white font-medium">
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={`#${item.path}`}
              className={`hover:text-blue-600 transition ${
                activeSection === item.path
                  ? "underline decoration-blue-600"
                  : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
