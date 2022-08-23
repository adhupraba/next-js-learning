import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const Dashboard = () => {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading") {
    return <h1>Loading....</h1>;
  }

  if (status === "unauthenticated") {
    return <h1>Redirecting to login</h1>;
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
