import Head from "next/head";
import { Fragment } from "react";
import Footer from "components/layout/Footer";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>About Adharsh</title>
        <meta name="description" content="Free classes for everyone" />
      </Head>
      <h1 className="content">About</h1>
    </Fragment>
  );
};

export default About;

About.getLayout = (page) => {
  return (
    <Fragment>
      {page}
      <Footer />
    </Fragment>
  );
};
