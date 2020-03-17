export class Customer {
  id: number;
  name: string;
  address: string;
  // tslint:disable-next-line: variable-name
  fk_region: number;

  constructor(
    pId: number,
    pName: string,
    pAddress: string,
    // tslint:disable-next-line: variable-name
    pFk_region: number
  ) {
    this.id = pId;
    this.name = pName;
    this.address = pAddress;
    this.fk_region = pFk_region;
  }
}
