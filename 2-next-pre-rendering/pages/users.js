// ! STATIC SITE GENERATION (SSG)

import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user, idx) => (
        <div key={idx}>
          <User user={user} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;

/** @type {import('next').GetStaticProps} */
export const getStaticProps = async () => {
  const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  return { props: { users } };
};
