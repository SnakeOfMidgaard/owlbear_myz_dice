import { Dice, isDice } from "../types/Dice";
import { isDie } from "../types/Die";

/**
 * Get dice that can be pushed
 * @param dice
 * @param values A mapping of Die ID to their rolled value
 * @returns
 */
export function getDiceToPush(
    dice: Dice,
    values: Record<string, number>
  ): string[] {

    let diceToPush: string[] = [];

    for (const dieOrDice of dice.dice) {
      if (isDie(dieOrDice)) {
        const value = values[dieOrDice.id];
        console.log (dieOrDice.style + " " + dieOrDice.type + ": " + value);
        if (value !== undefined) {
            if (dieOrDice.style === "MYZGEAR" && value > 1 && value < 6 || "MYZBASE" && value > 1 && value < 6) {
                if (dieOrDice.type === "D6" ||
                    dieOrDice.type === "D8" ||
                    dieOrDice.type === "D10" ||
                    dieOrDice.type === "D12"
                ){
                    diceToPush.push(dieOrDice.id);
                }
            }
            else if (dieOrDice.style === "MYZSKILL" && dieOrDice.type === "D6" && value < 6) {
                diceToPush.push(dieOrDice.id);
            }
        }
      } else if (isDice(dieOrDice)) {
        const ids = getDiceToPush(dieOrDice, values);
        if (ids != null) {
            diceToPush = diceToPush.concat(ids);
        }  
      }
    }
  return diceToPush;

  }
  