import ImageWithTextSection from "./src/ImageWithTextSection";
import Transform from "./Transform";

const Main = () => {
  const imageWithTextSections = [
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
    {
      title: "Graphic design",
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
      image: "image-graphic-design",
    },
  ];

  const displayImageWithTextSections = imageWithTextSections.map(
    (section, index) => {
      let orders = {
        text: "1",
        image: "2",
      };

      if (index % 2 === 1) {
        orders.text = 2;
        orders.image = 1;
      }
      return (
        <ImageWithTextSection
          key={index}
          index={index}
          orders={orders}
          section={section}
        />
      );
    }
  );
  return (
    <>
      {displayImageWithTextSections}
      {/* <Transform /> */}
    </>
  );
};

export default Main;
