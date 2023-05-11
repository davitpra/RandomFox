declare module "lodash" {
    // debemos entender como funciona para generar el tipado
    export function random(
      lower?: number,
      upper?: number,
      floating?: boolean
    ): number;
  }