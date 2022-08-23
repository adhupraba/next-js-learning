// ! CLIENT SIDE DATA FETCHING USING SWR PACKAGE

import useSWR from "swr";

const fetchData = async () => {
  const data = await (await fetch("http://localhost:4000/dashboard")).json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("dashboard", fetchData);

  if (error) {
    return "Error has occured";
  }

  if (!data) {
    return "Loading....";
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <p>posts - {data?.posts}</p>
      <p>likes - {data?.likes}</p>
      <p>followers - {data?.followers}</p>
      <p>following - {data?.following}</p>
    </div>
  );
};

export default DashboardSWR;
