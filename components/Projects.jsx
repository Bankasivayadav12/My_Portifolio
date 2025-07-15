const projects = [
  {
    title: "LubTrends - Ecommerce Gifting Platform",
    description: "An eCommerce platform focused on gifting with customized options.",
    date: "Jan 2023 - Present",
    image: "/images/tea.png", // Replace with actual image path
    link: "#",
  },
  {
    title: "Star Registration Frontend Website for VIP Gifts",
    description: "A project for registering stars in the sky as gifts with a frontend UI.",
    date: "Jul 2023 - Jul 2023",
    image: "/path-to-your-image/star-registration.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "Birthday App Maker Web Application",
    description: "An app for making personalized birthday greetings with custom options.",
    date: "Jan 2023 - Apr 2023",
    image: "/path-to-your-image/birthday-app.jpg", // Replace with actual image path
    link: "#",
  },
  {
    title: "AR Kiddo",
    description: "An educational AR application for kids to learn and grow interactively.",
    date: "Feb 2023 - May 2023",
    image: "/path-to-your-image/ar-kiddo.jpg", // Replace with actual image path
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 text-white py-16">
      <div className="text-center text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
        Explore My Project Works
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6 sm:px-12 lg:px-24">
        {projects.map((project, index) => (
          <div key={index} className="bg-white text-black rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-600 hover:text-white">
            <div className="relative mb-4">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black opacity-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-lg mt-2">{project.description}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">{project.date}</p>
              <a href={project.link} className="mt-4 inline-block text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
