import { storageGet, storageSet } from "./storage";
import { Player } from "../classes/players";

const key = "player2Board";

export const resetPlayer2Board = () => storageSet(key, new Player());

export const getPlayer2Board = () => storageGet(key, Player);

export const setPlayer2Board = (newBoard) => storageSet(key, newBoard);
