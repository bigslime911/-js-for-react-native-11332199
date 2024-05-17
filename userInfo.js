// Task 3
function createUserProfiles(namesOfUser, namesModified) {
    if (!Array.isArray(namesOfUser) || !Array.isArray(namesModified)) {
      throw new Error('Both arguments must be arrays.');
    }
    if (namesOfUser.length !== namesModified.length) {
      throw new Error('The lengths of the two arrays must match.');
    }
  
    return namesOfUser.map((name, index) => ({
      id: index + 1,
      namesOfUser: name,
      namesModified: namesModified[index]
    }));
  }
  
  // Example usage:
  const names = ['Black', 'Francis', 'Rita', 'Diana', 'Super'];
  const modifiedNames = ['BLACK', 'francis', 'RITA', 'diana',"SUPER"]; 
  const userProfiles = createUserProfiles(names, modifiedNames);
  console.log(userProfiles)  