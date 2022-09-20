const notFlatArray = [
  1,
  [2, [3, [[5]]]],
  [[[[[[[[6]]]]]]]],
  [8, [7], [[[[[[4]]]]]]],
];

const flat = (unFlatArray) => {
  return unFlatArray.reduce(
    (prev, current) =>
      Array.isArray(current) ? [...prev, ...flat(current)] : [...prev, current],
    []
  );
};

console.log(flat(notFlatArray), 'Expected: ', [1, 2, 3, 5, 6, 8, 7, 4]);
