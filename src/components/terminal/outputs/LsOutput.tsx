export const LsOutput = () => {
  const items = [
    { name: "about.md", color: "text-green" },
    { name: "skills.json", color: "text-blue" },
    { name: "experience/", color: "text-mauve" },
    { name: "projects/", color: "text-peach" },
    { name: "contact.txt", color: "text-pink" },
    { name: "social.json", color: "text-sky" },
    { name: "resume.pdf", color: "text-yellow" },
  ];

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {items.map((item) => (
        <span key={item.name} className={item.color}>
          {item.name}
        </span>
      ))}
    </div>
  );
};
