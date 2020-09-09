// @ts-nocheck

import { FakeData, IDATA } from "../FAKEDATA";
import { ChatActionTypes } from "./actionTypes";

export const reducer = (state: IDATA = FakeData, action) => {
  switch (action.type) {
    case ChatActionTypes.chatSelected: {
      return {
        ...state,
        selectedChatId: action.payload,
      };
    }
  }
  return state;
};
