export class Order {
  id: number;
  // tslint:disable-next-line: variable-name
  fk_customer: number;
  // tslint:disable-next-line: variable-name
  fk_employee: number;
  orderdate: number;
  requiredate: number;
  address: string;

  constructor(
    pId: number,
    // tslint:disable-next-line: variable-name
    pFk_customer: number,
    // tslint:disable-next-line: variable-name
    pFk_employee: number,
    pOrderdate: number,
    pRequiredate: number,
    pAddress: string
  ) {
    this.id = pId;
    this.fk_customer = pFk_customer;
    this.fk_employee = pFk_employee;
    this.orderdate = pOrderdate;
    this.requiredate = pRequiredate;
    this.address = pAddress;
  }
}
