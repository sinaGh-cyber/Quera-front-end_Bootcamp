const users = [
  { name: 'ali', age: '23', email: 'ali@gmail.com', role: 'admin' },
  { name: 'sara', age: '27', email: 'saraaa@yahoo.com', role: 'user' },
  { name: 'mahsa', age: '34', email: 'mahsa34@quera.ir', role: 'admin' },
  { name: 'reza', age: '15', email: 'reza.reza@gmail.com', role: 'user' },
  {
    name: 'john',
    age: '48',
    email: 'john@google.com',
    role: 'user',
  },
];

const newUsers = users.map((newUser) => {
  const name = newUser.name.charAt(0).toUpperCase() + newUser.name.slice(1);
  const age = +newUser.age;
  const emailDomain = newUser.email.slice(newUser.email.indexOf('@'));

  return { ...newUser, name, age, emailDomain };
}); // TODO: Change users structure based on 1, 2 and 3
console.log('new users: ', newUsers);
// 1- make names uppercase (for example: ali -> Ali)
// 2- change age type to number
// 3- add a filed called emailDomain and extract domain from email (for example: ali@gmail.com -> gmail.com)

// ****************************************************************************************************************
const youngestUser = users.reduce((prev, current) => {
  if (prev.age > current.age) return current;
  return prev;
}, users[0]);
console.log('youngest user: ', youngestUser); // TODO: Find youngest user

// ****************************************************************************************************************
const olderUsers = users.filter(({ age }) => age > 30); // TODO: Filter users that their age > 30
console.log('older users: ', olderUsers);

// ****************************************************************************************************************
const averageAge =
  users.reduce((prev, current) => {
    return +current.age + prev;
  }, 0) / users.length; // TODO: Calculate average age of all users (use reduce)

console.log('average age: ', averageAge);

// ****************************************************************************************************************
const groupedUserByRole = users.reduce(
  (prev, current) => {
    return { ...prev, [current.role]: [...prev[current.role], current] };
  },
  { admin: [], user: [] }
); // TODO: Group users by their role (use reduce)
// Result structure:
// {
//   admin: [{ name: 'ali', ... }],
//   user: [{ name: 'sara', ... }]
// }
console.log('grouped user by role: ', groupedUserByRole);
// Notice: do everything using functional methods (i.e. reduce, map, filter)
