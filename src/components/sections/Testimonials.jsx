import SingleTestimonial from "../src/SingleTestimonial";

const Testimonials = () => {
  const testimonials = [
    {
      image: "image-emily",
      comment:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit. ",
      name: "Emily R.",
      title: "Marketing Director",
    },
    {
      image: "image-thomas",
      comment:
        "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      title: "Chief Operating Officer",
    },
    {
      image: "image-jennie",
      comment:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      title: "Business Owner",
    },
  ];

  const displayTestimonials = testimonials.map((testimonial, index) => (
    <SingleTestimonial testimonial={testimonial} key={index} />
  ));
  return (
    <section className="p-0 lg:py-32 lg:px-24">
      <div className="container">
        <h2 className="uppercase font-fraunces font-extrabold text-2xl text-center text-neutral-grayish-blue tracking-[6px] mb-16">Client testimonials</h2>
        <div className="grid gap-7 grid-cols-1 lg:grid-cols-3">{displayTestimonials}</div>
      </div>
    </section>
  );
};

export default Testimonials;
