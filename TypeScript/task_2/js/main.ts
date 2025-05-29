interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2. Classe Director

class Director implements DirectorInterface {
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

// 3. Classe Teacher

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Sinon (nombre >= 500 ou string), on retourne un Director
  return new Director();
}
(window as any).createEmployee = createEmployee;

export function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        // Si c'est un directeur, on exécute ses tâches de directeur
        return employee.workDirectorTasks();
    } else {
        // Sinon, on exécute ses tâches d'enseignant
        return employee.workTeacherTasks();
    }
}
(window as any).executeWork = executeWork;
