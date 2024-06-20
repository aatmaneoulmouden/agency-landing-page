const SingleTestimonial = (props) => {
  const image = props.testimonial.image;
  const comment = props.testimonial.comment;
  const name = props.testimonial.name;
  const title = props.testimonial.title;
  return (
    <article className="testimonial flex flex-col gap-y-6 items-center text-center lg:gap-y-10">
      <img
        src={`./${image}.jpg`}
        alt={name}
        className="w-20 rounded-full mx-auto"
      />
      <p className="text-neutral-very-dark-grayish-blue font-semibold leading-[30px]">
        {comment}
      </p>
      <div>
        <h3 className="font-extrabold font-fraunces text-xl text-neutral-very-dark-desaturated-blue">
          {name}
        </h3>
        <small className="text-base text-neutral-grayish-blue font-medium">
          {title}
        </small>
      </div>
    </article>
  );
};

export default SingleTestimonial;
