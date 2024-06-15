const SingleFeature = (props) => {
  const textOrder = props.orders.text;
  const imageOrder = props.orders.image;

  const title = props.feature.title;
  const description = props.feature.description;
  const image = props.feature.image;
  const color = props.feature.color;

  return (
    <div className="feature grid grid-cols-2">
      <div
        className="p-40 flex flex-col gap-9"
        style={{ order: `${textOrder}` }}
      >
        <h2 className="text-5xl font-extrabold font-fraunces leading-[54px] text-neutral-very-dark-desaturated-blue">
          {title}
        </h2>
        <p className="text-neutral-very-dark-grayish-blue leading-[35px]">
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
