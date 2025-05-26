interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

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

function renderTable(students: Student[]) {
  const table = document.createElement("table");
  table.border = "1";

  // En-tête
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["First Name", "Last Name", "Age", "Location"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Corps du tableau
  const tbody = document.createElement("tbody");
  students.forEach(student => {
    const row = document.createElement("tr");
    Object.values(student).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value.toString();
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Ajout dans le DOM (ici dans le body, mais tu peux choisir un autre container)
  document.body.appendChild(table);
}

// Appel de la fonction après que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  renderTable(studentsList);
});
