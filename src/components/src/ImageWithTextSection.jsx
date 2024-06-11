const Transform = (props) => {
  const textOrder = props.orders.text;
  const imageOrder = props.orders.image;
  
  const title = props.section.title;
  const description = props.section.description;
  const image = props.section.image;

  return (
    <section>
      <div className="grid grid-cols-2">
        <div className={`p-40 flex flex-col gap-9 order-${textOrder}`}>
          <h2 className="text-5xl font-extrabold font-fraunces leading-[54px] text-neutral-very-dark-desaturated-blue">
            {title}
          </h2>
          <p className="text-neutral-very-dark-grayish-blue leading-[35px]">
            {description}
          </p>
          <a
            href=""
            className="section-link uppercase font-fraunces font-bold text-neutral-very-dark-desaturated-blue w-fit relative"
          >
            Learn more
          </a>
        </div>
        <div className={`bg-cover bg-center bg-[url('./desktop/${image}.jpg')] order-${imageOrder}`}></div>
      </div>
    </section>
  );
};

export default Transform;
