interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName}. ${lastName}`;
}

interface StudentClass {
  firstName: string;
  lastName: string;
}
interface workOnHomework {}
interface displayName {}

class StudentClass {
  firstName: string;
  lastName: string;

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.lastName;
  }
}
