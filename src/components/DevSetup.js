import React from "react";

const DevSetup = () => {
  return (
    <section id="dev-setup" className="py-16 bg-gradient-to-b from-gray-800 to-black text-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Developer Setup</h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          A well-organized environment helps me stay productive. Here’s a peek into the tools that power my workflow:
        </p>

        {/* Setup Details in a Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative p-6 bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 hover:bg-gray-600 transition-all">
            <div className="absolute -top-4 -left-4 bg-cyan-400 h-8 w-8 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Editor</h3>
            <p className="text-gray-300">VS Code with Prettier and ESLint extensions</p>
          </div>

          {/* Card 4 */}
          <div className="relative p-6 bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 hover:bg-gray-600 transition-all">
            <div className="absolute -top-4 -left-4 bg-yellow-400 h-8 w-8 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Tools</h3>
            <p className="text-gray-300">Docker for development, Git for version control</p>
          </div>

          {/* Card 5 */}
          <div className="relative p-6 bg-gray-700 rounded-xl shadow-lg transform hover:scale-105 hover:bg-gray-600 transition-all">
            <div className="absolute -top-4 -left-4 bg-pink-400 h-8 w-8 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-pink-400 mb-2">Other</h3>
            <p className="text-gray-300">Browser dev tools, Postman for API testing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevSetup;
