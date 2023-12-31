export class CardsModel {
  id?: string;
  packageName!: string;
  recto!: string;
  verso!: string;

  constructor(values: Object={}) {
    Object.assign(this, values);
  }
}
