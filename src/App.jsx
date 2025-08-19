import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, User, ExternalLink, Download, LinkedinIcon, GithubIcon, School, Award, Briefcase, Code } from "lucide-react";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import { scrollToSection } from "./utils/helper";

export default function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Dynamic color mapping for different technologies
  const getTechColor = (techName) => {
    const colorMap = {
      // Frontend Technologies
      "HTML": "bg-orange-500/80 hover:bg-orange-600/80",
      "CSS": "bg-blue-500/80 hover:bg-blue-600/80",
      "Tailwind CSS": "bg-cyan-500/80 hover:bg-cyan-600/80",
      "React": "bg-sky-500/80 hover:bg-sky-600/80",

      // Backend Technologies
      "Java": "bg-red-600/80 hover:bg-red-700/80",
      "NodeJs": "bg-green-600/80 hover:bg-green-700/80",
      "Spring Boot": "bg-emerald-600/80 hover:bg-emerald-700/80",
      "Express": "bg-gray-700/80 hover:bg-gray-800/80",
      "JavaScript": "bg-yellow-500/80 hover:bg-yellow-600/80",
      "MongoDB": "bg-green-500/80 hover:bg-green-600/80",
      "TypeScript": "bg-blue-600/80 hover:bg-blue-700/80",
      "MySQL": "bg-orange-600/80 hover:bg-orange-700/80",

      // Other Tools
      "Git": "bg-orange-500/80 hover:bg-orange-600/80",
      "Python": "bg-blue-500/80 hover:bg-blue-600/80",
      "Firebase": "bg-yellow-600/80 hover:bg-yellow-700/80",
    };

    return colorMap[techName] || "bg-indigo-500/80 hover:bg-indigo-600/80";
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Navbar />
      <div id="home" className="bg-[#F3F4F6] dark:bg-gray-900 text-[#111827] dark:text-white min-h-screen flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative w-full mt-8 max-w-7xl overflow-hidden"
        >
          <div className="absolute inset-0 blur-3xl"></div>

          <motion.section
            id="home"
            variants={itemVariants}
            className="min-h-screen flex flex-col justify-center items-center text-center scroll-mt-18 relative z-10 top-24 sm:top-0 py-24 px-4 w-full h-3/6 sm:h-screen"
          >
            <Helmet>
              <title>Kishalay Lahiri | Portfolio</title>
              <meta name="description" content="Full-Stack Developer portfolio of Kishalay Lahiri." />
            </Helmet>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#111827] dark:text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Hello, I'm Kishalay{" "}
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{
                  rotate: [0, 20, 0, 20, 0, 15, 0],
                  x: [0, 1, -1, 1, -1, 0],
                  y: [0, -1, 0, -1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.3, 0.5, 0.7, 0.9, 1]
                }}
              >
                👋
              </motion.span>
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl font-medium text-[#111827] dark:text-white mx-auto mb-4">
              Aspiring Full-Stack Developer
            </p>

            <p className="text-[#4B5563] dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable web applications and backend systems.<br />
              Currently seeking a full-stack or backend development internship where I can apply my skills, learn, and grow.
            </p>
            <br />
            <div className="flex flex-col md:flex-row gap-4 mt-5 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                onClick={(e) => scrollToSection(e, '#projects')}
              >
                <Code size={18} /> View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                onClick={(e) => scrollToSection(e, '#contact')}
              >
                <Mail size={18} /> Contact Me
              </a>
            </div>

            <div className="flex flex-row mt-6 gap-6 justify-center items-center">
              <a
                href="https://github.com/Kishalay15/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:translate-y-1 border border-gray-700 shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/kishalay-lahiri-5b1366265/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-1 border border-blue-500 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={24} className="text-white" />
              </a>
            </div>
          </motion.section>
        </motion.div>

        <div className="w-full max-w-7xl px-4">
          <motion.section
            id="about"
            variants={itemVariants}
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-teal-400 flex items-center justify-center gap-4">
              <User className="text-teal-500" />
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  I'm a passionate full-stack developer with particular interest in building scalable web applications. As a student at KIIT University, I'm constantly expanding my skills through both academic learning and personal projects.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  I enjoy solving complex problems with clean, efficient code and am particularly interested in Web Development and Java development.
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="#contact"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <Mail size={18} /> Contact Me
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-teal-400">
                  <img
                    src="/WhatsApp Image 2025-05-09 at 08.38.59_f7f92d51.jpg"
                    alt="Kishalay Lahiri"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            id="projects"
            variants={itemVariants}
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-400 flex items-center justify-center gap-4">
              <School className="text-amber-500" />
              Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 px-4 max-w-5xl mx-auto">
              {[
                {
                  title: "Expense Tracker",
                  desc: "This is an expense tracker with dashboard, income & expense tabs for managing daily transactions and balance. (Note: Please wait 1 minute for the backend to load properly.)",
                  link: "https://better-tracker.vercel.app/",
                  tags: ["MongoDB", "Express", "ReactJS", "NodeJS"],
                },
                {
                  title: "Blogging Application",
                  desc: "Built a full-stack blog app with React and Spring Boot featuring JWT auth, profile editing with password validation, post creation, and comment management.",
                  link: "https://github.com/Kishalay15/spring-boot-blog",
                  tags: ["ReactJs", "Spring Boot", "TailwindCSS"],
                },
                {
                  title: "Notey",
                  desc: "A lightweight, responsive note taking application built with React and TypeScript that stores your tasks in localStorage. It supports writing in markdown format, can be installed as an application and also supports rich text writing",
                  link: "https://notes-self-one.vercel.app/",
                  tags: ["ReactJS", "TypeScript"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="border-t border-gray-200 dark:border-gray-700 p-6 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all"
                >
                  <h3 className="text-xl font-bold text-amber-500 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{project.desc}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs bg-gray-700 dark:bg-gray-600 text-white px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            variants={itemVariants}
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
          >
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400 flex items-center justify-center gap-4">
              <Award className="text-indigo-500" />
              Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
              {[
                {
                  category: "Frontend",
                  skills: [
                    { name: "HTML", logo: "/icons8-html.svg" },
                    { name: "CSS", logo: "/icons8-css.svg" },
                    { name: "Tailwind CSS", logo: "/icons8-tailwindcss.svg" },
                    { name: "React", logo: "/icons8-react.svg" },
                  ],
                },
                {
                  category: "Backend",
                  skills: [
                    { name: "Java", logo: "icons8-java.svg" },
                    { name: "NodeJs", logo: "icons8-nodejs.svg" },
                    { name: "Spring Boot", logo: "/icons8-spring-boot.svg" },
                    { name: "Express", logo: "/icons8-express-js.svg" },
                    { name: "JavaScript", logo: "/icons8-javascript.svg" },
                    { name: "MongoDB", logo: "/icons8-mongodb.svg" },
                    { name: "TypeScript", logo: "/icons8-typescript.svg" },
                    { name: "MySQL", logo: "/icons8-mysql-logo.svg" },
                  ],
                },
                {
                  category: "Other Tools",
                  skills: [
                    { name: "Git", logo: "/icons8-git.svg" },
                    { name: "Python", logo: "/icons8-python.svg" },
                    { name: "Firebase", logo: "/icons8-firebase.svg" },
                  ],
                },
              ].map((group, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-indigo-500 mb-6">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 w-full">
                    {group.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center p-2"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                          title={skill.name}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-indigo-500 mb-6">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "PostgreSQL", logo: "/icons8-postgresql.svg" },
                  { name: "FastAPI", logo: "/12557196_fastapi_api_icon.svg" },
                ].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-14 h-14 object-contain"
                      title={skill.name}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>


          <div className="grid md:grid-cols-2 gap-12 py-12 w-full max-w-5xl mx-auto">
            <motion.section
              id="experience"
              variants={itemVariants}
              className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-rose-400 flex items-center justify-center gap-4">
                <Briefcase className="text-rose-500" />
                Experience
              </h2>
              <div className="grid gap-0">
                {[
                  {
                    title: "Web Development Contributor",
                    company: "GirlScript",
                    period: "May 2024 - Aug 2024",
                    desc: "Collaborated on web projects, solving real-world challenges."
                  },
                  {
                    title: "Full Stack Developer Intern",
                    company: "Lit Amor",
                    period: "July 2025 - Present",
                    desc: "Team lead for building core features of an upcoming dating-based social media platform"
                  }
                  // {
                  //   title: "Web Developer Fellowship",
                  //   company: "Keploy",
                  //   period: "June 2025",
                  //   desc: "Learned about CI/CD pipelines, preparing test cases and how to test an application to its limits, to find bugs and probable improvements"
                  // }
                ].map((exp, idx) => (
                  <div
                    key={idx}
                    className="border-t border-gray-200 dark:border-gray-700 p-6 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all"
                  >
                    <h3 className="text-xl font-bold text-rose-500 mb-1">{exp.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="education"
              variants={itemVariants}
              className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
            >
              <h2 className="text-4xl font-bold mb-8 text-center text-violet-400 flex items-center justify-center gap-4">
                <School className="text-violet-500" />
                Education
              </h2>
              <div className="grid gap-0">
                {[
                  {
                    degree: "Bachelor of Technology",
                    institution: "KIIT University",
                    period: "Expected 2026",
                    desc: "Pursuing comprehensive computer science education with focus on emerging technologies."
                  },
                  {
                    degree: "Higher Secondary",
                    institution: "Bharativa Vidya Bhavan",
                    period: "2022",
                    desc: "Completed higher secondary education with strong academic foundation."
                  }
                ].map((edu, idx) => (
                  <div
                    key={idx}
                    className="border-t border-gray-200 dark:border-gray-700 p-6 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all"
                  >
                    <h3 className="text-xl font-bold text-violet-500 mb-1">{edu.degree}</h3>
                    <p className="text-gray-700 dark:text-gray-200 font-semibold">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          <motion.section
            id="contact"
            variants={itemVariants}
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700 w-full"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400 flex items-center justify-center gap-4">
              <Mail className="text-cyan-500" />
              Contact Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-500" size={24} />
                  <a href="kishalaylahiri@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                    kishalaylahiri@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <LinkedinIcon className="text-cyan-500" size={24} />
                  <a href="https://www.linkedin.com/in/kishalay-lahiri-5b1366265/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <GithubIcon className="text-cyan-500" size={24} />
                  <a href="https://github.com/Kishalay15/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm actively seeking internship or full-time opportunities in full-stack or back-end development. If you're looking for someone with my skill set, let's connect!
                </p>
                <div className="mt-4">
                  <a
                    href="/My_main_Resume-3.pdf"
                    download
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <Download size={18} /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
        <footer className="w-full bg-[#F9FAFB] dark:bg-gray-800 py-6 text-center border-t border-[#E5E7EB] dark:border-gray-700">
          <p className="text-[#6B7280] dark:text-gray-400">© 2025 Kishalay Lahiri.</p>
        </footer>
      </div>
    </>
  );
}
