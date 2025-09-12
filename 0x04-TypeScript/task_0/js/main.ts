interface Student {
  firstName: String;
  lastName: String;
  age: Number;
  location: String;
}

const studentOne: Student = {
  firstName: "Kevin",
  lastName: "Wainaina",
  age: 25,
  location: "Membley",
};

const studentTwo: Student = {
  firstName: "Furaha",
  lastName: "Wakonyu",
  age: 15,
  location: "Membley",
};

let studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement("table");
const header = table.createTHead();
const headerRow = table.insertRow();
headerRow.innerHTML = `<th>First Name</th><th>Location</th>`;

const body = table.createTBody();

studentsList.forEach((student) => {
  const row = body.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

console.log(table);
