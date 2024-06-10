const Transform = () => {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="p-40 flex flex-col gap-9">
          <h2 className="text-5xl font-extrabold font-fraunces leading-[54px] text-neutral-very-dark-desaturated-blue">Transform your brand</h2>
          <p className="text-neutral-very-dark-grayish-blue leading-[35px]">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="" className="section-link uppercase font-fraunces font-bold text-neutral-very-dark-desaturated-blue w-fit relative">Learn more</a>
        </div>
        <div className="bg-cover bg-center bg-[url('./desktop/image-transform.jpg')]"></div>
      </div>
    </section>
  );
};

export default Transform;
