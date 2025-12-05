interface NavItem {
  label: string;
  href: string;
  color: string;
}

const navItems: NavItem[] = [
  { label: "home", href: "#home", color: "text-green" },
  { label: "about", href: "#about", color: "text-blue" },
  { label: "experience", href: "#experience", color: "text-mauve" },
  { label: "projects", href: "#projects", color: "text-peach" },
  { label: "contact", href: "#contact", color: "text-pink" },
];

export const TerminalNav = () => {
  return (
    <nav className="flex flex-wrap gap-4 items-center">
      <span className="text-subtext">{"["}</span>
      {navItems.map((item, index) => (
        <span key={item.href} className="flex items-center gap-4">
          <a
            href={item.href}
            className={`${item.color} hover:underline underline-offset-4 transition-all duration-200 hover:brightness-125`}
          >
            {item.label}
          </a>
          {index < navItems.length - 1 && <span className="text-subtext">|</span>}
        </span>
      ))}
      <span className="text-subtext">{"]"}</span>
    </nav>
  );
};
