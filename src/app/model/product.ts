export class Product {
  id: number;
  name: string;
  photo: number;
  unitprice: number;
  unitstock: number;
  unitonorder: number;
  // tslint:disable-next-line: variable-name
  fk_supplier: number;
  // tslint:disable-next-line: variable-name
  fk_category: number;

  constructor(
    pId: number,
    pName: string,
    pPhoto: number,
    pUnitprice: number,
    pUnitstock: number,
    pUnitonorder: number,
    // tslint:disable-next-line: variable-name
    pFk_supplier: number,
    // tslint:disable-next-line: variable-name
    pFk_category: number
  ) {
    this.id = pId;
    this.name = pName;
    this.photo = pPhoto;
    this.unitprice = pUnitprice;
    this.unitstock = pUnitstock;
    this.unitonorder = pUnitonorder;
    this.fk_supplier = pFk_supplier;
    this.fk_category = pFk_category;
  }
}
