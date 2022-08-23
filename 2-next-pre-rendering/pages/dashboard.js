// ! CLIENT SIDE DATA FETCHING

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchData = async () => {
    const data = await (await fetch("http://localhost:4000/dashboard")).json();
    setDashboardData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <p>posts - {dashboardData?.posts}</p>
      <p>likes - {dashboardData?.likes}</p>
      <p>followers - {dashboardData?.followers}</p>
      <p>following - {dashboardData?.following}</p>
    </div>
  );
};

export default Dashboard;
