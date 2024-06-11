import SingleFeature from "../src/SingleFeature";

const Features = () => {
  const features = [
    {
      title: "Transform your brand",
      description:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      image: "image-transform",
    },
    {
      title: "Stand out to the right audience",
      description:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
      image: "image-stand-out",
    },
  ];

  const displayFeatures = features.map((feature, index) => {
    let orders = {
      image: "1",
      text: "2",
    };

    if (index % 2 === 1) {
      orders.image = 2;
      orders.text = 1;
    }

    return <SingleFeature key={index} orders={orders} feature={feature} />;
  });
  return (
    <section id="features" className="features">
      {displayFeatures}
    </section>
  );
};

export default Features;
