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

export class addOrder {
  fk_customer: number;
  // tslint:disable-next-line: variable-name
  fk_employee: number;
  orderdate: number;
  requiredate: number;
  address: string;

  constructor(
    pFk_customer: number,
    // tslint:disable-next-line: variable-name
    pFk_employee: number,
    pOrderdate: number,
    pRequiredate: number,
    pAddress: string
  ) {
    this.fk_customer = pFk_customer;
    this.fk_employee = pFk_employee;
    this.orderdate = pOrderdate;
    this.requiredate = pRequiredate;
    this.address = pAddress;
  }
}
export class OrderDetail {
  fk_orders: number;
  // tslint:disable-next-line: variable-name
  fk_product: number;
  quantity: number;
  discunt: number;

  constructor(
    pFk_orders: number,
    // tslint:disable-next-line: variable-name
    pFk_product: number,
    pQuantity: number,
    pDiscunt: number
  ) {
    this.fk_orders = pFk_orders;
    this.fk_product = pFk_product;
    this.quantity = pQuantity;
    this.discunt = pDiscunt;
  }
}
