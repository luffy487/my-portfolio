"use client";
import { useState } from "react";
import { portfolio } from "../../utils/portfolio";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("experience");

  const redirectToURL = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 bg-gray-50">
      <section className="p-4 sm:p-8 w-full max-w-4xl mx-auto mt-8 sm:mt-10 rounded-lg">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={portfolio.image}
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full border-4 border-gray-200 shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {portfolio.name}
              </h2>
              <Image
                src="/verified.png"
                alt="verified"
                width={25}
                height={25}
              />
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <h3 className="text-md sm:text-xl text-gray-700">
                {portfolio.role}
              </h3>
              <span className="text-gray-700">|</span>
              <h2
                className="text-md text-gray-700 cursor-pointer hover:underline hover:text-blue-700"
                onClick={() => redirectToURL(portfolio.resume)}
              >
                Resume
              </h2>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center mt-4 text-gray-600">
              {portfolio.skills.map((skill: string, index: number) => (
                <div key={index} className="mx-1">
                  <span className="text-sm sm:text-md">{skill}</span>
                  {index !== portfolio.skills.length - 1 && (
                    <span className="ml-1">|</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-center md:justify-start gap-2">
              <button
                onClick={() => redirectToURL(portfolio.github)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <Image src="/github.png" alt="Github" width={35} height={35} />
              </button>
              <button
                onClick={() => redirectToURL(`mailto:${portfolio.email}`)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <Image src="/email.png" alt="email" width={30} height={30} />
              </button>
              <button
                onClick={() => redirectToURL(portfolio.linkedin)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </button>
              <button
                onClick={() => redirectToURL(portfolio.discord)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <Image
                  src="/discord.png"
                  alt="discord"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-left mb-8 sm:mb-12 max-w-4xl mx-auto mt-6 sm:mt-8">
        <p className="text-gray-700 leading-relaxed">{portfolio.summary}</p>
      </section>

      <section className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Skills</h1>
        <div className="flex flex-wrap gap-4">
          {portfolio.skill_images.map((skill, index) => (
            <div className="relative group" key={index}>
              <img
                src={skill.image}
                alt={skill.name}
                height={40}
                width={40}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover shadow-sm transition-transform transform"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row border-b border-gray-300">
          <button
            onClick={() => setActiveTab("experience")}
            className={`py-2 sm:py-3 px-4 sm:px-6 text-md sm:text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "experience"
                ? "text-blue-600 border-b-4 border-blue-600 bg-white shadow-md"
                : "text-gray-600 bg-gray-100 border-b-4 border-transparent"
            } rounded-t-lg`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`py-2 sm:py-3 px-4 sm:px-6 text-md sm:text-lg font-semibold transition-all duration-300 ease-in-out ${
              activeTab === "projects"
                ? "text-blue-600 border-b-4 border-blue-600 bg-white shadow-md"
                : "text-gray-600 bg-gray-100 border-b-4 border-transparent"
            } rounded-t-lg`}
          >
            Projects
          </button>
        </div>

        {activeTab === "experience" && (
          <div className="mt-4 sm:mt-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            {portfolio.experience.map((exp: any, index: number) => (
              <div
                key={index}
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {exp.company_name}
                  </h3>
                  <div className="text-gray-600 text-sm sm:text-right mt-2 sm:mt-0">
                    <div className="text-sm">{exp.time_period}</div>
                  </div>
                </div>
                <div className="text-sm sm:text-md mt-2 text-gray-600">{exp.role}</div>
                <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1 sm:space-y-2">
                  {exp.work.map((work: string, workIndex: number) => (
                    <li key={workIndex}>{work}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div className="mt-4 sm:mt-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            {portfolio.projects.map((project: any, index: number) => (
              <div
                key={index}
                className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {project.name}
                </h3>
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 mt-4">
                  {project.image && (
                    <div className="flex-shrink-0">
                      <img
                        src={project.image}
                        alt="projectImage"
                        className="w-full md:w-64 h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                  <div className="mt-4 md:mt-0 flex flex-col justify-center flex-grow">
                    <div className="flex flex-wrap items-center mt-2 space-x-4">
                      {project.link && (
                        <a
                          onClick={() => redirectToURL(project.link)}
                          className="text-black hover:underline"
                        >
                          {project.link}
                        </a>
                      )}
                      {project.github && (
                        <a
                          onClick={() => redirectToURL(project.github)}
                          className="text-blue-600 cursor-pointer flex items-center hover:scale-110"
                        >
                          <Image
                            src="/github.png"
                            alt="github"
                            width={30}
                            height={30}
                          />
                        </a>
                      )}
                      {project.smartcontract && (
                        <a
                          onClick={() => redirectToURL(project.smartcontract)}
                          className="text-black hover:scale-110"
                        >
                          <Image
                            src="/smartcontract.png"
                            alt="smartcontract"
                            width={30}
                            height={30}
                          />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 mt-2 text-sm sm:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
