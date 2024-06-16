const SingleFeature = (props) => {
  const textOrder = props.orders.text;
  const imageOrder = props.orders.image;

  const title = props.feature.title;
  const description = props.feature.description;
  const image = props.feature.image;
  const color = props.feature.color;

  return (
    <div className="feature grid grid-cols-1 lg:grid-cols-2">
      <div
        className="flex flex-col p-6 gap-4 items-center lg:items-start lg:gap-9 lg:p-40"
        style={{ order: `${textOrder}` }}
      >
        <h2 className="font-extrabold font-fraunces text-center text-neutral-very-dark-desaturated-blue text-3xl lg:text-5xl lg:text-left lg:leading-[54px]">
          {title}
        </h2>
        <p className="text-neutral-very-dark-grayish-blue text-center leading-[30px] lg:text-left lg:leading-[35px]">
          {description}
        </p>
        <a
          href=""
          className="feature-link uppercase font-fraunces font-bold text-neutral-very-dark-desaturated-blue w-fit relative group"
        >
          Learn more
          <div className="absolute left-0 bottom-0 w-full h-1/2 rounded-full -z-10 group-hover:opacity-40" style={{backgroundColor: `${color}`}}></div>
        </a>
      </div>
      <div style={{ order: `${imageOrder}` }}>
        <img
          src={`./desktop/${image}.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SingleFeature;
