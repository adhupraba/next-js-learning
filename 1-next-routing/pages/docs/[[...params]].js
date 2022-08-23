import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log("params ==>", params);

  if (params.length === 1) {
    return <h1>Docs for feature {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        Docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 3) {
    return (
      <h1>
        Docs for feature {params[0]}, concept {params[1]} and example {params[2]}
      </h1>
    );
  } else {
    return <h1>Docs home page</h1>;
  }
};

export default Doc;
