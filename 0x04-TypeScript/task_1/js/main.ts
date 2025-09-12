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
  (input: { firstName: string; lastName: string }): string;
}

function printTeacher(input: { firstName: string; lastName: string }): string {
  return `${input.firstName.charAt(0)}. ${input.lastName}`;
}
