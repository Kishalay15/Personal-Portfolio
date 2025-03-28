import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, School, Briefcase, Code, Award } from "lucide-react";

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
    <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white min-h-screen flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full max-w-7xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-3xl"></div>

        <motion.section
          variants={itemVariants}
          className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4 w-full"
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Kishalay Lahiri
          </motion.h1>
          <p className="text-2xl text-gray-300 max-w-xl mx-auto mb-6">
            Web Developer | Java Enthusiast | Tech Innovator
          </p>

          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://github.com/Kishalay15/"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-all transform hover:scale-110"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kishalay-lahiri-5b1366265/"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all transform hover:scale-110"
            >
              <Briefcase size={24} />
            </a>
          </div>
        </motion.section>
      </motion.div>

      <div className="w-full max-w-7xl px-4">
        <motion.section
          variants={itemVariants}
          className="py-16 bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 my-12 rounded-3xl border border-emerald-800/30 w-full"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-emerald-400 flex items-center justify-center gap-4">
            <Code className="text-emerald-500" />
            About Me
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto leading-relaxed px-4">
            B.Tech student with a strong passion for web and backend development,with expertise in Java,actively seeking opportunity to contribute to innovative projects and enhance user experiences.
          </p>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="py-16 bg-gradient-to-br from-indigo-900/20 to-indigo-900/10 my-12 rounded-3xl border border-indigo-800/30 w-full"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-400 flex items-center justify-center gap-4">
            <Award className="text-indigo-500" />
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
            {[
              {
                category: "Frontend",
                skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
                color: "text-red-400",
                bgColor: "bg-red-900/20"
              },
              {
                category: "Backend",
                skills: ["Java", "NodeJS", "Spring Boot", "MongoDB",],
                color: "text-green-400",
                bgColor: "bg-green-900/20"
              },
              {
                category: "Tools",
                skills: ["Git", "SQL", "Python", "AI/ML Basics"],
                color: "text-blue-400",
                bgColor: "bg-blue-900/20"
              }
            ].map((skillGroup, idx) => (
              <div
                key={idx}
                className={`${skillGroup.bgColor} p-6 rounded-2xl border border-opacity-30 hover:scale-105 transition-transform`}
              >
                <h3 className={`text-xl font-semibold mb-4 text-center ${skillGroup.color}`}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2 text-center">
                  {skillGroup.skills.map((skill, sidx) => (
                    <li
                      key={sidx}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="py-16 bg-gradient-to-br from-amber-900/20 to-amber-900/10 my-12 rounded-3xl border border-amber-800/30 w-full"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-400 flex items-center justify-center gap-4">
            <School className="text-amber-500" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
            {[{
              title: "Expense Tracker",
              desc: "This is an expense tracker where there are three tabs(dashboard,income & expense) and the users can keep a track of their daily income and expense with a final total balance.(Note:Kindly wait a minute for the web page to load to its optimum function)",
              link: "https://better-tracker.vercel.app/",
              tags: ["ReactJS", "NodeJS"],
              color: "border-red-600"
            },
            {
              title: "Drag and Drop to do list",
              desc: "This is a TO DO List where there are four columns(To Do,Doing, Done, Trash)with a Drag and Drop feature to shift the position of task between the columns as it progresses making its function easier and less time consuming.",
              link: "https://github.com/Kishalay15/Drag-and-drop-Todo",
              tags: ["CSS"],
              color: "border-blue-600"
            },
            {
              title: "Simple Expense Tracker",
              desc: "This is an expense tracker with tabs to input any transaction(income/expense) with their title and it also provides a final balance of the account(Note:Kindly wait a minute for the web page to load to its optimum function)",
              link: "https://expense-tracker-backend-coyb.onrender.com/",
              tags: ["JavaScript", "MongoDB"],
              color: "border-green-600"
            }].map((project, idx) => (
              <div
                key={idx}
                className={`bg-gray-800/50 rounded-2xl border-2 ${project.color} p-6 hover:scale-105 transition-transform`}
              >
                <h3 className="text-xl font-semibold mb-2 text-amber-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {project.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs bg-gray-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-amber-600 hover:bg-amber-700 px-3 py-1 rounded-md transition-colors"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <div className="grid md:grid-cols-2 gap-12 py-12 w-full max-w-5xl mx-auto">
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-br from-rose-900/20 to-rose-900/10 rounded-3xl border border-rose-800/30 p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-rose-400 flex items-center justify-center gap-4">
              <Briefcase className="text-rose-500" />
              Experience
            </h2>
            <div className="space-y-6">
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
                  className="bg-gray-800/50 p-5 rounded-xl border border-rose-600/30"
                >
                  <h3 className="text-xl font-semibold text-rose-400">{exp.title}</h3>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-400">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
          <motion.section
            variants={itemVariants}
            className="bg-gradient-to-br from-violet-900/20 to-violet-900/10 rounded-3xl border border-violet-800/30 p-8"
          >
            <h2 className="text-4xl font-bold mb-8 text-center text-violet-400 flex items-center justify-center gap-4">
              <School className="text-violet-500" />
              Education
            </h2>
            <div className="space-y-6">
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
                  className="bg-gray-800/50 p-5 rounded-xl border border-violet-600/30"
                >
                  <h3 className="text-xl font-semibold text-violet-400">{edu.degree}</h3>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-gray-400">{edu.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      <footer className="w-full bg-gray-900/50 py-6 text-center border-t border-gray-800">
        <p className="text-gray-500">© 2025 Kishalay Lahiri.</p>
      </footer>
    </div>
  );
}
