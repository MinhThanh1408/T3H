const people = [
  {
    firstName: 'Sam',
    lastName: 'Hughes',
    DOB: '07/07/2000',
    department: 'Development',
    salary: '45000',
  },
  {
    firstName: 'Terri',
    lastName: 'Bishop',
    DOB: '02/04/1989',
    department: 'Development',
    salary: '35000',
  },
  {
    firstName: 'Jar',
    lastName: 'Burke',
    DOB: '11/01/1985',
    department: 'Marketing',
    salary: '38000',
  },
  {
    firstName: 'Julio',
    lastName: 'Miller',
    DOB: '12/07/1991',
    department: 'Sales',
    salary: '40000',
  },
  {
    firstName: 'Chester',
    lastName: 'Flores',
    DOB: '03/15/1988',
    department: 'Development',
    salary: '41000',
  },
  {
    firstName: 'Madison',
    lastName: 'Marshall',
    DOB: '09/22/1980',
    department: 'Sales',
    salary: '32000',
  },
  {
    firstName: 'Ava',
    lastName: 'Pena',
    DOB: '11/02/1986',
    department: 'Development',
    salary: '38000',
  },
  {
    firstName: 'Gabriella',
    lastName: 'Steward',
    DOB: '08/26/1994',
    department: 'Marketing',
    salary: '46000',
  },
  {
    firstName: 'Charles',
    lastName: 'Campbell',
    DOB: '09/04/1977',
    department: 'Sales',
    salary: '42000',
  },
  {
    firstName: 'Tiffany',
    lastName: 'Lambert',
    DOB: '05/11/1990',
    department: 'Development',
    salary: '34000',
  },
  {
    firstName: 'Antonio',
    lastName: 'Gonzalez',
    DOB: '03/24/1985',
    department: 'Office Management',
    salary: '49000',
  },
  {
    firstName: 'Aaron',
    lastName: 'Garrett',
    DOB: '09/04/1985',
    department: 'Development',
    salary: '39000',
  },
];

//Bài 1
//1
function averageSalary(people) {
  const sumSalary = people.reduce((accumulate, currentValue) => {
    return accumulate + currentValue.salary * 1;
  }, 0);
  return (sumSalary / people.length).toFixed(0);
}
//2

function convertDOBToYOB(DOB) {
  return DOB.slice(-4) * 1;
}

function calculateAge(DOB) {
  const today = new Date();
  const result = today.getFullYear() - convertDOBToYOB(DOB);
  return result;
}

function filterPeopleOlderThan30(people) {
  const result = people.filter((person) => calculateAge(person.DOB) > 30);
  return result;
}
//3
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getListFullName(persons) {
  const result = persons.map((person) => {
    return {
      ...person,
      fullName: getFullName(person.firstName, person.lastName),
    };
  });
  return result;
}

//4
function getListAge(persons) {
  const result = people.map((person) => {
    return {
      ...person,
      age: calculateAge(person.DOB),
    };
  });
  return result;
}

function sortYoungestToOldest(persons) {
  persons = getListAge(persons);
  const result = persons.sort((a, b) =>
    a.age > b.age ? 1 : a.age < b.age ? -1 : 0
  );
  return result;
}
sortYoungestToOldest(people);

//5

function countPersonInDepartment(persons) {
  const departments = {
    Development: 0,
    Marketing: 0,
    Sales: 0,
    Office_Management: 0,
  };

  persons.forEach((person) => {
    switch (person.department) {
      case 'Development':
        departments.Development++;
        break;
      case 'Marketing':
        departments.Marketing++;
        break;
      case 'Sales':
        departments.Sales++;
        break;
      case 'Office Management':
        departments.Office_Management++;
        break;
    }
  });

  return departments;
}
//Bài 2
const numbers = [
  25, 50, 43, 36, 31, 26, 24, 19, 28, 24, 4, 18, 16, 48, 47, 49, 42, 15, 3, 16,
];

function filterOnlyItem1(array) {
  return Array.from(new Set(array));
}
function filterOnlyItem2(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}


function filterOnlyItem3(array) {
  const _array = [...array];
  for (let i = 0; i < _array.length; i++) {
    for (let j = i + 1; j < _array.length; j++) {
      if (_array[i] === _array[j]) {
        console.log(_array[i], _array[j]);
        _array.splice(j, 1);
      }
    }
  }
  return _array;
}
