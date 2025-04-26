import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, School, Briefcase, Code, Award } from "lucide-react";
import Navbar from "./components/Navbar";

export default function App() {
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
      <div id="home" className="bg-[#F3F4F6] text-[#111827] min-h-screen flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative w-full max-w-7xl overflow-hidden"
        >
          <div className="absolute inset-0 blur-3xl"></div>

          <motion.section
            variants={itemVariants}
            className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4 w-full h-screen" // added `h-screen`
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-[#111827]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              Hello, I'm Kishalay 👋
            </motion.h1>

            <p className="text-2xl font-medium text-[#111827] max-w-xl mx-auto mb-4">
              Aspiring Full-Stack Developer
            </p>

            <p className="text-[#4B5563] text-lg max-w-2xl mx-auto leading-relaxed">
              Passionate about building scalable web applications and backend systems.<br />
              Currently seeking a full-stack or backend development internship where I can apply my skills, learn, and grow.
            </p>
            <br />

            <div className="flex gap-6 justify-center items-center">
              <a
                href="https://github.com/Kishalay15/"
                target="_blank"
                className="bg-[#3B82F6] p-3 rounded-full hover:bg-[#2563EB] transition-all transform hover:scale-105"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kishalay-lahiri-5b1366265/"
                target="_blank"
                className="bg-[#3B82F6] p-3 rounded-full hover:bg-[#2563EB] transition-all transform hover:scale-105"
              >
                <Briefcase size={24} />
              </a>
            </div>
          </motion.section>
        </motion.div>


        <div className="w-full max-w-7xl px-4">
          <motion.section
            id="projects"
            variants={itemVariants}
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white w-full"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-amber-400 flex items-center justify-center gap-4">
              <School className="text-amber-500" />
              Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 px-4 max-w-5xl mx-auto">
              {[
                {
                  title: "Expense Tracker",
                  desc: "This is an expense tracker with dashboard, income & expense tabs for managing daily transactions and balance. (Note: Please wait for the page to load.)",
                  link: "https://better-tracker.vercel.app/",
                  tags: ["ReactJS", "NodeJS"],
                },
                {
                  title: "Drag and Drop To-Do List",
                  desc: "A To-Do app with four columns (To Do, Doing, Done, Trash) featuring drag-and-drop functionality for seamless task management.",
                  link: "https://github.com/Kishalay15/Drag-and-drop-Todo",
                  tags: ["CSS"],
                },
                {
                  title: "Simple Expense Tracker",
                  desc: "An expense tracker with transaction input tabs and final account balance calculation. (Note: Please wait for the page to load.)",
                  link: "https://expense-tracker-backend-coyb.onrender.com/",
                  tags: ["JavaScript", "MongoDB"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="border-t border-gray-200 p-6 hover:bg-amber-50 transition-all"
                >
                  <h3 className="text-xl font-bold text-amber-500 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">{project.desc}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
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
            className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white w-full"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400 flex items-center justify-center gap-4">
              <Award className="text-indigo-500" />
              Skills
            </h2>

            <div className="grid md:grid-cols-3 gap-0 px-4 max-w-5xl mx-auto">
              {[
                {
                  category: "Frontend",
                  skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
                },
                {
                  category: "Backend",
                  skills: ["Java", "NodeJS", "Spring Boot", "MongoDB"],
                },
                {
                  category: "Tools",
                  skills: ["Git", "SQL", "Python", "AI/ML Basics"],
                },
              ].map((group, idx) => (
                <div
                  key={idx}
                  className="border-t border-gray-200 p-6 hover:bg-indigo-50 transition-all"
                >
                  <h3 className="text-xl font-bold text-indigo-500 mb-4 text-center">
                    {group.category}
                  </h3>
                  <ul className="space-y-2 text-center">
                    {group.skills.map((skill, sidx) => (
                      <li
                        key={sidx}
                        className="text-gray-600 hover:text-indigo-500 transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>


          <div className="grid md:grid-cols-2 gap-12 py-12 w-full max-w-5xl mx-auto">
            <motion.section
              id="experience"
              variants={itemVariants}
              className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white w-full"
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
                    title: "Web Developer",
                    company: "Prodigy Infotech",
                    period: "May 2024 - June 2024",
                    desc: "Developed responsive web interfaces and maintained version control."
                  }
                ].map((exp, idx) => (
                  <div
                    key={idx}
                    className="border-t border-gray-200 p-6 hover:bg-rose-50 transition-all"
                  >
                    <h3 className="text-xl font-bold text-rose-500 mb-1">{exp.title}</h3>
                    <p className="text-gray-700 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="education"
              variants={itemVariants}
              className="py-16 my-12 rounded-3xl border border-gray-200 shadow-md bg-white w-full"
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
                    className="border-t border-gray-200 p-6 hover:bg-violet-50 transition-all"
                  >
                    <h3 className="text-xl font-bold text-violet-500 mb-1">{edu.degree}</h3>
                    <p className="text-gray-700 font-semibold">{edu.institution}</p>
                    <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                    <p className="text-gray-600">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>
        </div>
        <footer className="w-full bg-[#F9FAFB] py-6 text-center border-t border-[#E5E7EB]">
          <p className="text-[#6B7280]">© 2025 Kishalay Lahiri.</p>
        </footer>
      </div>
    </>
  );
}
