import { ITicket } from "../types/ITicket";

export const sortByPrice = (arrWithPrice: ITicket[]) => {
  arrWithPrice.sort((a, b) => {
    return a.price - b.price;
  });
  return arrWithPrice;
};
