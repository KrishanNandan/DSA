const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return <p>Loading data...</p>;
    return <Component {...props} />;
  };
};

// Usage
const UserList = ({ users }) => (
  <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
);

const UserListWithLoading = withLoading(UserList);

export default UserListWithLoading;

// Inside a Page
// <UserListWithLoading isLoading={true} users={[]} />

/**When you write { isLoading, ...props }, you are using ES6 Destructuring to "pluck" 
 * the isLoading value out so you can use it for your logic, 
 * while grouping everything else into a variable called props to pass to component */
