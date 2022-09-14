const employees = [
    { name: 'Ali', company: 'quera' },
    { name: 'Mohsen', company: 'google' },
    { name: 'Sara', company: 'apple' },
    { name: 'Nima', company: 'quera' },
  ];
  
  const customFind = (arr, checkedFunction) => {
    return arr.find(checkedFunction)
    // TODO: complete this higher order function
  };
  
  const findMohsen = (employee) => employee.name === 'Mohsen';
  
  const findResult = customFind(employees, findMohsen);
  
  console.log(findResult);