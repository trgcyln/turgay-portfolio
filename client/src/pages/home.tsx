import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Users,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronRight,
  Award,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiHackerrank } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="font-mono text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
            data-testid="link-home"
          >
            turgay.io
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Turgay Ceylan
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            WordPress Plugin & Theme Developer since 2010. Experienced in front-end and
            full-stack development with expertise in JavaScript, ASP.NET, Java, and modern
            web technologies.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:turgay@turgayceylan.com"
              className="inline-flex items-center gap-2"
              data-testid="link-email-hero"
            >
              <Button>
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/trgcyln"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github-hero"
              >
                <Button size="icon" variant="outline">
                  <SiGithub className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/trgcyln/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin-hero"
              >
                <Button size="icon" variant="outline">
                  <SiLinkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.hackerrank.com/trgcyln"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hackerrank-hero"
              >
                <Button size="icon" variant="outline">
                  <SiHackerrank className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  id,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-12">
      <div className="flex items-center gap-4 mb-2">
        <div className="p-2 rounded-md bg-accent">
          <Icon className="h-5 w-5 text-accent-foreground" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <Separator className="mt-6" />
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "Be Connected",
      role: "Full Stack Developer",
      description:
        "Procurement Management/Insights for Public and Private Sector based on ASP.NET Web Forms - Front-End & Back-End Development",
      technologies: [
        "DevExpress Bootstrap Controls",
        "Metronic UI Components",
        "Redis In-Memory Storage",
        "Entity Framework 6.0",
        "amCharts",
      ],
    },
    {
      company: "Moneta",
      role: "Front-End Developer",
      description:
        "Project Management & Issue Tracking based on ASP.NET MVC 5 - Front-End Development",
      technologies: ["ASP.NET MVC 5", "JavaScript", "CSS"],
    },
    {
      company: "Celebi",
      role: "Android Developer",
      description:
        "Android Navigation App - Traffic based navigation system which benefits 4G networking and interacts with the main servers and interprets real time & predicted data.",
      technologies: ["Android", "Java", "4G Networking", "Real-time Data"],
      achievements: [
        "Project Support from Ministry of Science, Industry and Technology, Republic of Turkey",
        "Project Support from Small and Medium Enterprises Development Organization",
        "Partnership with BlackBerry Turkey on HTML5 based Navigation App",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Briefcase} title="Experience" id="experience" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="relative overflow-visible">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-md" />
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl font-semibold">{exp.company}</CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {exp.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {exp.achievements && (
                  <div className="pt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "HTML5", "CSS & LESS", "jQuery"],
    },
    {
      title: "Backend",
      skills: ["C#", "ASP.NET MVC", "Entity Framework", "Java", "J2EE", "EJB & JSP", "PHP"],
    },
    {
      title: "Databases",
      skills: ["MSSQL", "MySQL", "Oracle 11g", "Redis"],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Ubuntu 16.04 - 22.04",
        "Nginx",
        "Windows Server 2016-2022",
        "Hyper-V",
        "Docker",
        "Git",
      ],
    },
    {
      title: "Other",
      skills: [
        "PrimeFaces",
        "Tomcat",
        "C",
        "Scheme & Prolog",
        "Visual Studio",
        "VS Code",
        "Sublime",
        "Figma",
        "WordPress",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Code2} title="Skills & Qualifications" id="skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm">WordPress Plugin & Theme Developer</span>
              <Badge variant="outline" className="text-xs">
                2010 - Present
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" />
              <span className="text-sm">Front-End Developer</span>
              <Badge variant="outline" className="text-xs">
                2010 - Present
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      title: "University Courses",
      courses: [
        "Adv. Java",
        "SOA Concepts",
        "TCP/IP Networking",
        "Linux System Administration",
        "C# & ASP.NET",
        "OOP Analysis & Design using UML",
        "Mobile App Development in Android",
      ],
      project: {
        title: "Android Navigation Application",
        description:
          "Android Navigation Application which uses web services to get live & predicted traffic information",
      },
    },
    {
      title: "Computer Science Fundamentals",
      courses: [
        "Operating Systems",
        "Data Structures and Algorithms",
        "Computer Organization and Design",
        "OOP with Java",
        "Software Engineering",
        "Computer Networks",
        "Principles of Programming Languages",
        "Human Computer Interaction",
      ],
      project: {
        title: "Istanbul's Journey Planner",
        description: "Similar to Transport for London journey planning system",
        link: "https://tfl.gov.uk/plan-a-journey/",
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={GraduationCap} title="Education" id="education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{edu.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <Badge key={course} variant="outline" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Graduation Project
                  </p>
                  <h4 className="font-medium text-foreground mb-1">{edu.project.title}</h4>
                  <p className="text-sm text-muted-foreground">{edu.project.description}</p>
                  {edu.project.link && (
                    <a
                      href={edu.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-2 transition-colors"
                      data-testid={`link-project-${index}`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      View Reference
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferencesSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Users} title="References" id="references" />

        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground">
              Professional references available upon request.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ContactSection() {
  const contacts = [
    {
      label: "Website",
      value: "turgay.io",
      href: "https://turgay.io/",
      icon: ExternalLink,
    },
    {
      label: "GitHub",
      value: "github.com/trgcyln",
      href: "https://github.com/trgcyln",
      icon: SiGithub,
    },
    {
      label: "HackerRank",
      value: "hackerrank.com/trgcyln",
      href: "https://www.hackerrank.com/trgcyln",
      icon: SiHackerrank,
    },
    {
      label: "Freelancer",
      value: "freelancer.com/u/gordack",
      href: "https://www.freelancer.com/u/gordack",
      icon: ExternalLink,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/trgcyln",
      href: "https://www.linkedin.com/in/trgcyln/",
      icon: SiLinkedin,
    },
    {
      label: "Email",
      value: "turgay@turgayceylan.com",
      href: "mailto:turgay@turgayceylan.com",
      icon: Mail,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={Mail} title="About & Contact" id="about" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group"
              data-testid={`link-contact-${contact.label.toLowerCase()}`}
            >
              <Card className="hover-elevate h-full transition-colors">
                <CardContent className="flex items-center gap-4 py-4">
                  <div className="p-2 rounded-md bg-muted group-hover:bg-accent transition-colors">
                    <contact.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-0.5">
                      {contact.label}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {contact.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} Turgay Ceylan. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-back-to-top"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
