import { Link } from "react-router";

function Hero() {
  return (
    <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey, I'm Tassos 👋</h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        I am a full-stack web developer, well versed in the JavaScript and React
        ecosystems and their descendants. Be it Next JS, React Router in
        framework mode, TanStack Start, Express JS with Node, or even vanilla
        JavaScript, I am always interested in and stimulated by new
        developments, juxtaposed on old approaches, in the realm of front-end
        and full-stack web development.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className=" border border-blue-500 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
}

export default Hero;
