import { useState } from "react";
import { TerminalWindow } from "../terminal/TerminalWindow";
import { Prompt } from "../terminal/Prompt";

type TabType = "work" | "org" | "certs";

const workExperience = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
  },
  {
    title: "Software Engineer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: [
      "Built real-time collaboration features using WebSockets",
      "Developed RESTful APIs with Node.js and PostgreSQL",
      "Optimized database queries improving response time by 40%",
    ],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: [
      "Created responsive web applications using React",
      "Collaborated with design team on UI/UX improvements",
      "Participated in agile development processes",
    ],
  },
];

const organizations = [
  {
    role: "Tech Lead",
    org: "Local Dev Community",
    period: "2021 - Present",
    description: "Organizing monthly meetups and workshops for 500+ members",
  },
  {
    role: "Open Source Maintainer",
    org: "OSS Project",
    period: "2020 - Present",
    description: "Maintaining a popular open-source library with 2k+ stars",
  },
  {
    role: "Volunteer Instructor",
    org: "Code for Kids",
    period: "2019 - 2021",
    description: "Teaching programming basics to underprivileged youth",
  },
];

const certificates = [
  { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023", color: "text-peach" },
  { name: "Professional Cloud Developer", issuer: "Google Cloud", year: "2022", color: "text-blue" },
  { name: "Certified Kubernetes Admin", issuer: "CNCF", year: "2022", color: "text-sky" },
  { name: "Full Stack Development", issuer: "freeCodeCamp", year: "2020", color: "text-green" },
];

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  const tabs: { id: TabType; label: string; color: string }[] = [
    { id: "work", label: "work", color: "text-green" },
    { id: "org", label: "organizations", color: "text-mauve" },
    { id: "certs", label: "certificates", color: "text-peach" },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="~/experience — bash">
          <Prompt command="ls experience/" />
          
          <div className="mt-4 slide-up">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? `bg-surface ${tab.color} font-semibold`
                      : "text-subtext hover:text-foreground"
                  }`}
                >
                  {tab.label}/
                </button>
              ))}
            </div>

            {/* Work Experience */}
            {activeTab === "work" && (
              <div className="space-y-6">
                <Prompt command="cat work/*.md" />
                {workExperience.map((job, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4 border-l-2 border-ctp-green">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-green font-semibold">{job.title}</h3>
                      <span className="text-subtext text-sm">{job.period}</span>
                    </div>
                    <p className="text-mauve mb-3">@ {job.company}</p>
                    <ul className="space-y-1">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-foreground text-sm">
                          <span className="text-subtext mr-2">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Organizations */}
            {activeTab === "org" && (
              <div className="space-y-6">
                <Prompt command="cat organizations/*.md" />
                {organizations.map((org, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4 border-l-2 border-ctp-mauve">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h3 className="text-mauve font-semibold">{org.role}</h3>
                      <span className="text-subtext text-sm">{org.period}</span>
                    </div>
                    <p className="text-blue mb-2">@ {org.org}</p>
                    <p className="text-foreground text-sm">{org.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Certificates */}
            {activeTab === "certs" && (
              <div className="space-y-4">
                <Prompt command="cat certificates.json | jq" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="bg-surface rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">📜</span>
                        <div>
                          <h3 className={`${cert.color} font-semibold`}>{cert.name}</h3>
                          <p className="text-subtext text-sm">{cert.issuer}</p>
                          <p className="text-overlay text-xs mt-1">{cert.year}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};
