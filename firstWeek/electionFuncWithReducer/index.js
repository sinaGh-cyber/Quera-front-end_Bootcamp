const votes = ['a', 'a', 'b', 'a', 'c', 'c', 'b', 'c', 'c', 'b', 'a'];

// let initial = { a: 0, b: 0, c: 0 };
// const electionResult = votes.reduce((prev, current) => {
//   prev[current]++;
//   return prev;
// }, initial);

let initial = {};
const electionResult = votes.reduce((prev, current) => {
  prev[current] = prev[current] + 1 || 1;
  return prev;
}, initial);

console.log(electionResult);
