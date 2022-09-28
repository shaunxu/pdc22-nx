import { myLib } from "@pdc22-nx/my-lib";

export function myApp(): string {
  console.log(1);
  return `${myLib()} my-app`;
}
