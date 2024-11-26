import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Cherie Jewelry ",
      description: "A full online ecommerce store for Cherie.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/t0nah/Cherie-Jewelry.git",
    },
    {
      title: "E-Commerce App",
      description: "A fully functional online store with secure checkout.",
      tech: ["Ruby on Rails", "PostgreSQL", "Docker"],
      link: "https://github.com/t0nah/chaotic_goods.git",
    },
    {
      title: "Non Profit CMS",
      description: "A CMS created for a non-profit EP Steps",
      tech: ["PHP", "MySQL", "Docker"],
      link: "https://github.com/t0nah/Final-Project.git",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              <h3
                className="text-2xl font-normal"
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <p className="mt-4">
                <strong>Tech:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                className="text-accent hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
