const SingleProject = (props) => {
  return (
    <div className="project">
      <img src={`./desktop/${props.image}.jpg`} alt="Project" className="hidden lg:block" />
      <img src={`./mobile/${props.image}.jpg`} alt="Project" className="block lg:hidden" />
    </div>
  );
};

export default SingleProject;