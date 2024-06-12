import SingleService from "../src/SingleService";

const Services = () => {
  const services = [
    {
      image: "image-graphic-design",
      title: "Graphic design",
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    },
    {
      image: "image-photography",
      title: "Photography",
      description:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];

  const displayServices = services.map((service, index) => (
    <SingleService key={index} service={service} />
  ));
  return (
    <section id="services" className="services">
      <div className="grid grid-cols-2">
        {displayServices}
      </div>
    </section>
  );
};

export default Services;
