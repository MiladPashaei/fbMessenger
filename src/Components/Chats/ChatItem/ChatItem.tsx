import React, { ReactElement } from "react";
import { CHAT_LIST } from "../../../FAKEDATA";
import * as action from "../../../store/action";
import style from "./ChatItem.module.scss";
import { useDispatch } from "react-redux";
interface Props {
  chatData: CHAT_LIST;
}

export default function ChatItem({ chatData }: Props): ReactElement {
  const { name, id, avatar } = chatData;
  const dispatch = useDispatch();
  const chatSelectHandler = () => {
    dispatch(action.chatSelected(id));
  };
  return (
    <div onClick={chatSelectHandler} className={style["container"]}>
      <div className={style["img-container"]}>
        <div className={style["image"]}>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className={style["content"]}>
        <h4>{name}</h4>
      </div>
      <div className={style["details"]}></div>
    </div>
  );
}
