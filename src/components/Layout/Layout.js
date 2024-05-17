import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollNews from "../ScrollNews/ScrollNews";

export default function Layout({ style, children }) {
  return (
    <>
      <Header />
      <ScrollNews />
      <main style={style}>{children}</main>
      <Footer />
    </>
  );
}
