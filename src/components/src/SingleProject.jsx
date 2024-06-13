const SingleProject = (props) => {
  return (
    <div className="project">
      <img src={`./desktop/${props.image}.jpg`} alt="Project" />
    </div>
  );
};

export default SingleProject;