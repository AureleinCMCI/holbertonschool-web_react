// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students and store them in an array
const student1: Student = {
  firstName: "Alice",
  lastName: "Dupont",
  age: 22,
  location: "Paris"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 25,
  location: "Lyon"
};

const studentsList: Student[] = [student1, student2];

studentsList.forEach((element) => console.log(element));

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);

})
document.body.appendChild(table);
