export class Employee {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  phone: number;
  photo: string;
  birthdate: number;
  salary: number;
  // tslint:disable-next-line: variable-name
  fk_departament: number;

  constructor(
    pId: number,
    pName: string,
    pLastname: string,
    pEmail: string,
    pPassword: string,
    pAddress: string,
    pPhone: number,
    pPhoto: string,
    pBirthdate: number,
    pSalary: number,
    // tslint:disable-next-line: variable-name
    pFk_departament: number
  ) {
    this.id = pId;
    this.name = pName;
    this.lastname = pLastname;
    this.email = pEmail;
    this.password = pPassword;
    this.address = pAddress;
    this.phone = pPhone;
    this.photo = pPhoto;
    this.birthdate = pBirthdate;
    this.salary = pSalary;
    this.fk_departament = pFk_departament;
  }
}
