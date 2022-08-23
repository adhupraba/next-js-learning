const User = ({ user }) => {
  return (
    <div>
      <p>name - {user.name}</p>
      <p>email - {user.email}</p>
    </div>
  );
};

export default User;
