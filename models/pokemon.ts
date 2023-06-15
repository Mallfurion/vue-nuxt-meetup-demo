export enum POWER_TYPE {
  NORMAL = "normal",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
}

export interface Pokemon {
  name: string;
  power: POWER_TYPE;
  avatar: string;
  level: number;
  external?: boolean;
}
