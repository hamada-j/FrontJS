export class Category {
  id: number;
  name: string;
  description: string;

  constructor(pId: number, pName: string, pDescription: string) {
    this.id = pId;
    this.name = pName;
    this.description = pDescription;
  }
}
