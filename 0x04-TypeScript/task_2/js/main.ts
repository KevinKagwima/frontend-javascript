interface DirectorInteface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface extends DirectorInteface {}

class Director implements DirectorInteface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workDirectorTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number): object {
  if (salary < 500) {
    return Teacher;
  }
  return Director;
}
