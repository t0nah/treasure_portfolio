import React from "react";

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center text-teal-400">Resources</h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-10">
          A curated list of tools and guides that have shaped my development journey:
        </p>

        {/* Resources List */}
        <div className="space-y-8">
          {/* Resource 1 */}
          <div className="flex items-center gap-6 p-6 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700 transition">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold">FreeCodeCamp</h3>
              <p className="text-gray-400">
                Comprehensive coding tutorials and challenges.
              </p>
              <a
                href="https://www.freecodecamp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline hover:text-teal-300"
              >
                Visit
              </a>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="flex items-center gap-6 p-6 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700 transition">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold">MDN Web Docs</h3>
              <p className="text-gray-400">
                The go-to documentation for web development.
              </p>
              <a
                href="https://developer.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Visit
              </a>
            </div>
          </div>

          {/* Resource 3 */}
          <div className="flex items-center gap-6 p-6 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700 transition">
            <div className="flex-shrink-0 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold">YouTube Channels</h3>
              <p className="text-gray-400">
                Fireship, Traversy Media, Web Dev Simplified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
