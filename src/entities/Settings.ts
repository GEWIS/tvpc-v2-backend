import {Poster} from "./Poster";

export interface Settings {
  posters: Poster[],
  defaultTimeout: number,
  defaultFooter: string;
  screenEffect: string;
  layout: Layouts
}

export enum Layouts {
  GEWIS = 'gewis',
  BAC = 'bac',
  BOARD = '39',
}
