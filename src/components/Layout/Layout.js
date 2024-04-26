import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ style, children }) {
  return (
    <>
      <Header />
      <main style={style}>{children}</main>
      <Footer />
    </>
  );
}
