const SingleService = (props) => {
  const title = props.service.title;
  const description = props.service.description;
  const image = props.service.image;
  console.log(image);
  return (
    <article className="relative h-screen">
      <img
        src={`./desktop/${image}.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="content absolute top-0 left-0 w-full h-full text-center flex flex-col justify-end gap-8 px-5 pb-12 lg:px-40 lg:pb-24">
        <h2 className="font-fraunces font-extrabold capitalize text-2xl text-primary-dark-blue">
          {title}
        </h2>
        <p className="max-w-[370px] mx-auto font-medium text-neutral-very-dark-desaturated-blue">
          {description}
        </p>
      </div>
    </article>
  );
};

export default SingleService;
