interface Teacher{
readonly ffirstName: string;
readonly lastName: string;
fullTimeEmployee: boolean;
yearsOfExperience?:number   ;
location: string;
[key: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = function(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
};


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface décrivant la signature du constructeur
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}