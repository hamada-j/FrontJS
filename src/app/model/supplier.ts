export class Supplier {
  id: number;
  company: string;
  contact: string;
  address: string;
  // tslint:disable-next-line: variable-name
  fk_region: number;

  constructor(
    pId: number,
    pCompany: string,
    pContact: string,
    pAddress: string,
    // tslint:disable-next-line: variable-name
    pFk_region: number
  ) {
    this.id = pId;
    this.company = pCompany;
    this.contact = pContact;
    this.address = pAddress;
    this.fk_region = pFk_region;
  }
}
