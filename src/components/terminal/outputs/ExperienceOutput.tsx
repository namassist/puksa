import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Building2, Users, Award, Briefcase } from "lucide-react";

export const ExperienceOutput = () => {
  const { t } = useLanguage();

  const workExperiences = [
    {
      title: t.expRole1,
      company: "Tech Corp",
      companyType: "Series C Startup",
      period: "2022 - Present",
      location: "San Francisco, CA",
      highlights: [
        "Led microservices architecture serving 1M+ daily active users",
        "Architected real-time data pipeline processing 10TB+ daily",
        "Mentored team of 6 junior developers through code reviews",
        "Reduced deployment time by 60% implementing CI/CD pipelines",
        "Improved API response time by 40% through caching strategies",
      ],
      techStack: ["TypeScript", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
    },
    {
      title: t.expRole2,
      company: "StartupXYZ",
      companyType: "Early Stage Startup",
      period: "2020 - 2022",
      location: "Remote",
      highlights: [
        "Built real-time collaboration features using WebSockets",
        "Developed RESTful APIs with Node.js and PostgreSQL",
        "Optimized database queries, improving response time by 40%",
        "Implemented OAuth2 authentication supporting 5 providers",
        "Created automated testing suite with 90% code coverage",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    },
    {
      title: t.expRole3,
      company: "Digital Agency",
      companyType: "Agency",
      period: "2019 - 2020",
      location: "New York, NY",
      highlights: [
        "Created responsive web applications for 15+ clients",
        "Collaborated with design team on UI/UX improvements",
        "Participated in agile development processes",
        "Built e-commerce platforms generating $2M+ annual revenue",
      ],
      techStack: ["React", "Vue.js", "PHP", "MySQL", "AWS"],
    },
  ];

  const organizationalRoles = [
    {
      role: "Tech Lead",
      org: "Open Source Community XYZ",
      period: "2023 - Present",
      description: "Leading development of community tools and mentoring new contributors",
      icon: Users,
    },
    {
      role: "Conference Speaker",
      org: "ReactConf, JSConf",
      period: "2022 - 2023",
      description: "Delivered talks on state management and performance optimization",
      icon: Award,
    },
    {
      role: "Mentor",
      org: "Code Mentors Program",
      period: "2021 - Present",
      description: "Mentored 20+ junior developers transitioning into tech",
      icon: Users,
    },
    {
      role: "Hackathon Judge",
      org: "Various Tech Events",
      period: "2022 - Present",
      description: "Evaluated projects at 10+ hackathons globally",
      icon: Award,
    },
  ];

  const certifications = [
    { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2023", color: "text-peach", badge: "🏆" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2023", color: "text-blue", badge: "🏅" },
    { name: "Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022", color: "text-sky", badge: "📜" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB Inc", year: "2022", color: "text-green", badge: "📜" },
    { name: "Terraform Associate", issuer: "HashiCorp", year: "2022", color: "text-mauve", badge: "📜" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2021", color: "text-pink", badge: "📜" },
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "Stanford University",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      highlights: ["Dean's List", "Research Assistant - ML Lab", "CS Teaching Assistant"],
    },
  ];

  return (
    <div className="space-y-4">
      {/* Work Experience */}
      <p className="text-lavender flex items-center gap-2">
        <Briefcase size={16} />
        {t.expTitle}
      </p>
      
      {workExperiences.map((exp, i) => (
        <div 
          key={i} 
          className="bg-surface rounded-lg p-4 border-l-2 border-ctp-green"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
            <span className="text-green font-semibold">{exp.title}</span>
            <span className="text-subtext text-sm">{exp.period}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-mauve flex items-center gap-1">
              <Building2 size={14} />
              {exp.company}
            </span>
            <span className="text-xs bg-ctp-surface1 px-2 py-0.5 rounded text-subtext">{exp.companyType}</span>
            <span className="text-xs text-overlay">📍 {exp.location}</span>
          </div>
          <ul className="space-y-1 mb-3">
            {exp.highlights.map((item, j) => (
              <li key={j} className="text-foreground text-sm flex gap-2">
                <span className="text-subtext">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-0.5 bg-ctp-surface1 rounded text-blue">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Organizational Roles */}
      <div className="mt-6">
        <p className="text-lavender mb-3 flex items-center gap-2">
          <Users size={16} />
          // Community & Leadership
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {organizationalRoles.map((role, i) => (
            <div key={i} className="bg-surface rounded-lg p-3">
              <div className="flex items-start gap-2">
                <role.icon size={16} className="text-peach mt-0.5" />
                <div>
                  <div className="text-green font-medium">{role.role}</div>
                  <div className="text-mauve text-sm">@ {role.org}</div>
                  <div className="text-subtext text-xs">{role.period}</div>
                  <p className="text-foreground text-sm mt-1">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-6">
        <p className="text-lavender mb-3 flex items-center gap-2">
          <Award size={16} />
          {t.expCertsTitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-surface rounded-lg px-3 py-2">
              <div className={`${cert.color} font-medium text-sm flex items-center gap-1`}>
                {cert.badge} {cert.name}
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-subtext">{cert.issuer}</span>
                <span className="text-overlay">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-6">
        <p className="text-lavender mb-3">// Education</p>
        {education.map((edu, i) => (
          <div key={i} className="bg-surface rounded-lg p-4 border-l-2 border-ctp-blue">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <span className="text-blue font-semibold">{edu.degree}</span>
              <span className="text-subtext text-sm">{edu.period}</span>
            </div>
            <div className="text-mauve mb-2">🎓 {edu.school}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-subtext text-sm">GPA:</span>
              <span className="text-green font-medium">{edu.gpa}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.highlights.map((h) => (
                <span key={h} className="text-xs px-2 py-0.5 bg-ctp-surface1 rounded text-foreground">
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
