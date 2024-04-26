import banner from "../images/banner.jpg";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px",
      }}
    />
  );
}
