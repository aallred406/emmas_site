const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to my world. Here's my story, my passions, and what makes me
            who I am.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Placeholder */}
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-blue-200 to-purple-300 rounded-lg aspect-square flex items-center justify-center shadow-xl">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-white mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="text-white text-lg font-medium">Emma's Photo</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Hello, I'm Emma!
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate creative individual who loves to explore the
                  intersection of art, technology, and human connection. My
                  journey has taken me through various creative endeavors, each
                  one teaching me something new about myself and the world
                  around me.
                </p>
                <p>
                  When I'm not creating, you can find me exploring new places,
                  reading fascinating books, or having deep conversations with
                  friends over coffee. I believe that every experience shapes us
                  and contributes to our creative expression.
                </p>
                <p>
                  This website is my digital home where I share my work,
                  thoughts, and the things that inspire me. Thank you for taking
                  the time to get to know me better!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills/Interests */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            My Interests & Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Photography", level: 90 },
              { name: "Digital Art", level: 85 },
              { name: "Web Design", level: 75 },
              { name: "Writing", level: 80 },
              { name: "Illustration", level: 70 },
              { name: "Music", level: 65 },
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-6">
            I'd love to hear from you! Whether you want to collaborate, chat
            about shared interests, or just say hello, don't hesitate to reach
            out.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Send Message
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
