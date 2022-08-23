import Image from "next/image";
import img1 from "public/1.jpeg";

const Pets = () => {
  return (
    <div>
      <Image src={img1} alt={"1.jpeg"} placeholder="blur" blurDataURL="/1.jpeg" width="480" height="420" />

      <hr />

      {[1, 2, 3, 4, 5].map((name) => (
        <div key={name}>
          {/* <img src={`/${name}.jpeg`} alt={name} width="480" height="420" /> */}
          <Image src={`/${name}.jpeg`} alt={name} width="480" height="420" />
        </div>
      ))}
    </div>
  );
};

export default Pets;
