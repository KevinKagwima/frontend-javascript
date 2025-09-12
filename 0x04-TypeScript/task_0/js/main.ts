interface Student {
  firstName: string;
  lastName: string;
  age: Number;
  location: string;
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
const headerRow = `
  <tr>
    <th>First Name</th><th>Location</th>
  </tr>
`;

const body = table.createTBody();

studentsList.forEach((student) => {
  body.innerHTML = `
  <tr>
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  </tr>
  `;
});

header.append(headerRow);
header.appendChild(body);
