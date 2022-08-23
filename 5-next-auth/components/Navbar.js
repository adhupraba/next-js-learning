import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data, status } = useSession();

  // console.log({ data, status });

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${status === "loading" ? "loading" : "loaded"}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {data && (
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        {!data && status !== "authenticated" && (
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {data && data.user && status === "authenticated" && (
          <li>
            <Link href="#">
              <a onClick={signOut}>Sign Out</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
