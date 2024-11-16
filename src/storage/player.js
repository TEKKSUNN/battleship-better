import { storageGet, storageSet } from "./storage";
import { Player } from "../classes/players";

const key = "playerBoard";

export const resetPlayerBoard = () => storageSet(key, new Player());

export const getPlayerBoard = () => storageGet(key, Player);

export const setPlayerBoard = (newBoard) => storageSet(key, newBoard);
