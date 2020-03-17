export class Territories {
  id: number;
  zona: string;
  // tslint:disable-next-line: variable-name
  fk_region: number;

  // tslint:disable-next-line: variable-name
  constructor(pId: number, pZona: string, pFk_region: number) {
    this.id = pId;
    this.zona = pZona;
    this.fk_region = pFk_region;
  }
}
