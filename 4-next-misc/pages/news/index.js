const News = ({ data }) => {
  return <h1 className="content">{data}</h1>;
};

export default News;

/** @type {import("next").GetStaticProps} */
export const getStaticProps = async (context) => {
  console.log("running news get static props", context.previewData);
  return { props: { data: context.preview ? "List of draft articles" : "List of published articles" } };
};
