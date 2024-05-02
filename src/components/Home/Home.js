import Banner from "../Banner/Banner";
import Layout from "../Layout/Layout";
import Teachers from "../Teachers/Teachers";
import Welcome from "../Welcome/Welcome";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Welcome />
      <Teachers />
    </Layout>
  );
}
