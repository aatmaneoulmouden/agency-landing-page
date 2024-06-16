import SingleProject from "../src/SingleProject";

const Projects = () => {
  const projects = [
    {
      image: "image-gallery-milkbottles",
    },
    {
      image: "image-gallery-orange",
    },
    {
      image: "image-gallery-cone",
    },
    {
      image: "image-gallery-sugarcubes",
    },
  ];

  const displayProjects = projects.map((project, index) => (
    <SingleProject key={index} image={project.image} />
  ));

  return (
    <section id="projects" className="projects">
      <div className="grid grid-cols-2 lg:grid-cols-4">{displayProjects}</div>
    </section>
  );
};

export default Projects;
