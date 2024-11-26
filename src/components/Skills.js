import React from "react";

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-400">
          My Skills
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          The tech I am familiar with:
        </p>

        {/* Horizontal Skills Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skill Block 1 */}
          <div className="p-6 border-t-4 border-purple-500 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              Languages
            </h3>
            <p className="text-gray-300">
              {" "}
              Ruby on Rails, JavaScript, Python, C#
            </p>
          </div>

          {/* Skill Block 2 */}
          <div className="p-6 border-t-4 border-blue-500 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              Frameworks
            </h3>
            <p className="text-gray-300">React.js, Flask, .NET</p>
          </div>

          {/* Skill Block 3 */}
          <div className="p-6 border-t-4 border-green-500 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Tools</h3>
            <p className="text-gray-300">Docker, Git, PostgreSQL, VS Code</p>
          </div>

          {/* Skill Block 4 */}
          <div className="p-6 border-t-4 border-yellow-500 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              Other
            </h3>
            <p className="text-gray-300">
              REST APIs, Unit Testing, Agile Methodologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
