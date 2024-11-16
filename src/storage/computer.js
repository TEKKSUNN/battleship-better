import { storageGet, storageSet } from "./storage";
import { Computer } from "../classes/players";

const key = "computerBoard";

export const resetComputerBoard = () => storageSet(key, new Computer());

export const getComputerBoard = () => storageGet(key);

export const setComputerBoard = (newBoard) => storageSet(key, newBoard);
