import {CardsModel} from "./cards.model";

export class LearningPackageModel {
  id?: string;
  title!: string;
  description!: string;
  category!: string;
  difficulty!: number;

  constructor(values: Object = {}) {
    Object.assign(values)
  }
}

export interface LearningPackages {
  [key: string] : CardsModel[];
}
