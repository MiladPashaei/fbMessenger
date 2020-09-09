import { ChatActionTypes } from "./actionTypes";

export const chatSelected = (id: number) => {
  return { type: ChatActionTypes.chatSelected, payload: id };
};
