import { SetterOrUpdater } from "recoil";
import { Item } from "../types/types";

export const arrangeDate = () => {
  const dateNow = new Date();
  const aWeekFromNow = new Date(dateNow.getTime() + 7 * 24 * 60 * 60 * 1000);
  return aWeekFromNow;
};

export const checkIfNumberIsPositive = (value: number) => {
  if (value < 0) {
    throw new Error('Value must be greater than 0');
  }

  return true ;
};


